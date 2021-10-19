const express = require('express');
const app = express();
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');
//const tut_database = require('../tut_database_con');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

Router.get('/', (req, res) => {
    connection.query('SELECT * FROM user', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/allscreens', (req, res) => {
    connection.query('SELECT COUNT(*) AS totScreen FROM screen', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/stud_staff', (req, res, next) => {

    screen_id = 0;
    temp = req.body.temp;
    campus = req.body.campus;
    cough = req.body.cough;
    breathing = req.body.breathing;
    fever = req.body.fever;
    symptoms = req.body.symptom;
    contact = req.body.contact;
    covid_contact = req.body.contact_covid;
    travel = req.body.travel;
    stud_staff = req.body.stud_staff

    if( campus === "soshanguve South Campus"){
        camp_id = "soshs";
    }
    else if(campus === "soshanguve North Campus")
    {
        camp_id = "soshn";
    }
    else if(campus === "Ga-Rankuwa Campus" )
    {
        camp_id = "rank";  
    }
    else if(campus === "Arcadia Campus" )
    {
        camp_id = "arc";
    }
    else if(campus === "Arts Campus")
    {
        camp_id = "art";
    }
    else if(campus === "Emalehleni Campus")
    {
        camp_id = "emal";
    }
    else if(campus === "Pretoria Campus")
    {
        camp_id = "main";
    }
    else if(campus === "Polokwane Campus")
    {
        camp_id = "pol";
    }

    if(cough){cough = "Yes";}else{cough = "No"}
    if(breathing){breathing = "Yes";}else{breathing = "No"}
    if(fever){fever = "Yes";}else{fever = "No"}
    if(cough){cough = "Yes";}else{cough = "No"}

    tem = temp.toString();
    pos = tem.indexOf('.');
    dat =  new Date();

    day = ("0" + dat.getDate()).slice(-2);
    month = ("0" + (dat.getMonth() + 1)).slice(-2);
    year = dat.getFullYear();

    date = year+'-'+month+'-'+day;
                //screen_id full_name phone temp campus cough breathing fever symptoms contact covid_contact travel stud_staff visitor_id camp_id screen_date appointment
                //screen_id full_name phone temp campus cough breathing fever symptoms contact covid_contact travel stud_staff visitor_id camp_id screen_date appointment

    console.log(pos);
    if(pos <=2 )
    {
        connection.query("SELECT stud_num FROM student WHERE stud_num = '"+ stud_staff +"' ", (error, stu_rows, fields) => {
            if(stu_rows.length > 0){
                connection.query("INSERT INTO screen VALUES('"+ screen_id +"',NULL,NULL, '"+ temp +"', '" + campus +"', '"+ cough +"', '"+ breathing +"', '"+ fever +"', '"+ symptoms +"', '"+ contact +"', '"+ covid_contact +"', '"+ travel +"', '"+ stud_staff +"', NULL,'"+ camp_id +"','"+ date +"',NULL)", (err, rows, fields) => {
                    if(!err){
                        res.json({stu_message : "Student successfully screened"});
                    }else{
                        res.send(err)
                    }
                })
            }else if (stu_rows.length < 0){
                connection.query("SELECT staff_num FROM staff WHERE staff_num = '"+ stud_staff +"' ", (error, staff_rows, fields) => {
                    if(staff_rows.length > 0){ 
                        connection.query("INSERT INTO screen VALUES('"+ screen_id +"',NULL,NULL, '"+ temp +"', '" + campus +"', '"+ cough +"', '"+ breathing +"', '"+ fever +"', '"+ symptoms +"', '"+ contact +"', '"+ covid_contact +"', '"+ travel +"', '"+ stud_staff +"', NULL,'"+ camp_id +"','"+ date +"',NULL)", (err, rows, fields) => {
                            if(!err){
                                res.json({stu_message : "Student successfully screened"});
                            }else{
                                res.send(err)
                            }
                        })
                    }
                })
            }else{
                res.json({ message: "Student or Staff does not exist!"})
            }
        })
    }
    else
    {
        res.json({ temp_message: "Invalid temperature"})
    }

});


///for visitor
Router.post('/visitor', (req, res, next) => {

    screen_id = 0;
    temp = req.body.temp;
    campus = req.body.campus;
    cough = req.body.cough;
    breathing = req.body.breathing;
    fever = req.body.fever;
    symptoms = req.body.symptom;
    contact = req.body.contact;
    covid_contact = req.body.contact_covid;
    travel = req.body.travel;
    stud_staff = req.body.stud_staff;
    visitor_id = req.body.visitor_id;
    full_name = req.body.fullname;
    appointment = req.body.appointment;
    phone = req.body.phone;
    camp_id ="";

    if( campus === "soshanguve South Campus"){
        camp_id = "soshs";
    }
    else if(campus === "soshanguve North Campus")
    {
        camp_id = "soshn";
    }
    else if(campus === "Ga-Rankuwa Campus" )
    {
        camp_id = "rank";  
    }
    else if(campus === "Arcadia Campus" )
    {
        camp_id = "arc";
    }
    else if(campus === "Arts Campus")
    {
        camp_id = "art";
    }
    else if(campus === "Emalehleni Campus")
    {
        camp_id = "emal";
    }
    else if(campus === "Pretoria Campus")
    {
        camp_id = "main";
    }
    else if(campus === "Polokwane Campus")
    {
        camp_id = "pol";
    }

    if(cough){cough = "Yes";}else{cough = "No"}
    if(breathing){breathing = "Yes";}else{breathing = "No"}
    if(fever){fever = "Yes";}else{fever = "No"}
    if(cough){cough = "Yes";}else{cough = "No"}

    tem = temp.toString();
    pos = tem.indexOf('.');
    dat =  new Date();

    day = ("0" + dat.getDate()).slice(-2);
    month = ("0" + (dat.getMonth() + 1)).slice(-2);
    year = dat.getFullYear();

    date = year+'-'+month+'-'+day;
                //screen_id full_name phone temp campus cough breathing fever symptoms contact covid_contact travel stud_staff visitor_id camp_id screen_date appointment
    //console.log(pos);
    if(pos <=2)
    {
        connection.query("INSERT INTO screen VALUES('"+ screen_id +"','"+ full_name +"','"+ phone +"', '"+ temp +"', '" + campus +"', '"+ cough +"', '"+ breathing +"', '"+ fever +"', '"+ symptoms +"', '"+ contact +"', '"+ covid_contact +"', '"+ travel +"',NULL, '"+ visitor_id +"','"+ camp_id +"','"+ date +"','"+ appointment +"')", (err, rows, fields) => {
            if(!err){
                res.send(rows);
            }else{
                console.log(err)
                }
            })
    }
    else
    {
        res.send("Enter correct temp");
    }

});
module.exports = Router;