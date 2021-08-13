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

Router.post('/', (req, res, next) => {

    stu_number = req.body.studentNo;
    staff_number = req.body.staff_num;
    ID_number : String = "tut is my home";
    visitor_id = "vis" + ID_number.substring(0, 6);
    camp_code = req.body.camp_id;
    tested = req.body.tested;
    screen_date = req.body.screen_date;	
    tested_date	= req.body.tested_date;
    status = req.body.status;
    symtoms	= req.body.symtoms;
    temp = req.body.temp;
    campus = req.body.campus;

    tut_database.query('SELECT * FROM student WHERE stu_number=?', [stu_number], (err, rows, fields) => {
        if(!err){
            console.log(rows)
            // screen_id	staff_num	Stud_num	visitor_id	camp_id	tested	Screen_date	tested_date	status	symtoms	temp	campus	
            tut_database.query("INSERT INTO screen VALUES('"+ staff_number +"', '"+ stu_number +"', '" + visitor_id +"', '"+ camp_id +"', '"+ tested +"', '"+ screen_date +"', '"+ tested_date +"', '"+ status +"', '"+ symtoms +"', '"+ temp +"', '"+ campus +"')", (err, rows, fields) => {
                if(!err){
                    console.log(rows)
                }else{
                    console.log(err)
                }
            })
        }else{
            console.log(err)
        }
    })

    ///console.log(tut_stu_number);

    // id = 2;
    // fullname = req.body.fullname;
    // phone = req.body.phone; 
    // cough = req.body.cough;
    // breathing = req.body.breathing;
    // symptoms = req.body.symptoms;
    // fever = req.body.fever;
    // symptom = req.body.symptom;
    // contact = req.body.contact;
    // contactCovid = req.body.contactCovid;
    // travelled = req.body.travelled;
    // appointment = req.body.appointment;

    // connection.query("INSERT INTO user VALUES('"+ id +"', '"+ fullname +"', '" + phone +"', '"+ cough +"', '"+ breathing +"', '"+ symptoms +"', '"+ fever +"', '"+ symptom +"', '"+ contact +"', '"+ contactCovid +"', '"+ travelled +"', '"+ appointment +"')", (err, rows, fields) => {
    //     if(!err){
    //         res.send(rows)
    //     }else{
    //         console.log(err)
    //     }
    // })
});

module.exports = Router;