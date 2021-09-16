const express = require('express');
const app = express();
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

campus = "soshs";

//report
Router.get('/report', (req, res) => {

    connection.query('SELECT * FROM screen,staff,user where screen.stud_staff = staff.staff_num and user.id_number = staff.id_number order by screen_date desc', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

//daily
Router.post('/campus', (req, res) => {
    
    campus = req.body.campusID;

    connection.query('SELECT count(*) as "totnum",campus as "campus" FROM screen where camp_id = "'+campus+'" and screen_date = (SELECT DATE(SYSDATE()))', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/student', (req, res) => {

    campus = req.body.campusID;

    connection.query('SELECT count(*) as "studNum" FROM screen where camp_id = "'+campus+'" and screen_date = (SELECT DATE(SYSDATE())) and length(stud_staff)=9', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/staff', (req, res) => {

    campus = req.body.campusID;

    connection.query('SELECT count(*) as "staffNum" FROM screen where camp_id = "'+campus+'" and screen_date = (SELECT DATE(SYSDATE())) and length(stud_staff)=6', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

// Router.post('/campus/constractor', (req, res) => {

//     campus = req.body.campusID;

//     connection.query('SELECT count(*) as "constNum" FROM screen where camp_id = "'+campus+'" and screen_date = (SELECT DATE(SYSDATE()))', (err, rows, fields) => {
//         if(!err){
//             res.send(rows)
//         }else{
//             console.log(err)
//         }
//     })
// });

Router.post('/campus/visitor', (req, res) => {

    campus = req.body.campusID;

    connection.query('SELECT count(*) as "visNum" FROM screen where camp_id = "'+campus+'" and screen_date = (SELECT DATE(SYSDATE())) and stud_staff is NULL', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/symptoms', (req, res) => {

    campus = req.body.campusID;

    connection.query('SELECT count(*) as "sympNum" FROM screen where camp_id = "'+campus+'" and screen_date = (SELECT DATE(SYSDATE())) and temp > 36.7', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

//Weekly 
Router.post('/campus/weekly', (req, res) => {

    campus = req.body.campusID;

    connection.query('SELECT count(*) as totWeek FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -7 Day) and date(sysdate())', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
}); //done

Router.post('/campus/student/weekStud', (req, res) => {

    campus = req.body.campusID;

    connection.query('SELECT count(*) as studNum FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -7 Day) and date(sysdate()) and length(stud_staff)=9', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/staff/weekStaff', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as staffNum FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -7 Day) and date(sysdate()) and length(stud_staff)=6', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});



Router.post('/campus/visitor/weekVis', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as visNum FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -7 Day) and date(sysdate()) and stud_staff is NULL', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/symptoms/weekSymp', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as "sympNum" FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -7 Day) and date(sysdate()) and temp > 36.7', (err, rows, _fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

//end weekly

//beginning of monthly
// we only need to change the date by month
Router.post('/campus/monthly', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as totnum,campus FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -1 Month) and date(sysdate())', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/student/monthStud', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as studNum FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -1 Month) and date(sysdate()) and length(stud_staff)=9', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/staff/monthStaff', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as staffNum FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -1 Month) and date(sysdate()) and length(stud_staff)=6', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/constractor/monthCons', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as "constNum" FROM screen,user where camp_id = "'+campus+'" and screen_date = (SELECT DATE(SYSDATE())) and role = "constractor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/visitor/monthVis', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as visNum FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -1 Month) and date(sysdate()) and stud_staff is NULL', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/campus/symptoms/monthSymp', (req, res) => {

    campus = req.body.campusID;
    connection.query('SELECT count(*) as "sympNum" FROM screen where camp_id = "'+campus+'" and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -1 Month) and date(sysdate()) and temp > 36.7', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

//end of montly

module.exports = Router;