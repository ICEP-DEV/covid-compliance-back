const express = require('express');
const app = express();
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


Router.get('/campus', (req, res) => {
    connection.query('SELECT count(*) as "totnum" FROM screen where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE()))', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/student', (req, res) => {
    connection.query('SELECT count(*) as "studNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "student"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/staff', (req, res) => {
    connection.query('SELECT count(*) as "staffNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "staff"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/constractor', (req, res) => {
    connection.query('SELECT count(*) as "constNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "constractor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/visitor', (req, res) => {
    connection.query('SELECT count(*) as "visNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "visitor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/symptoms', (req, res) => {
    connection.query('SELECT count(*) as "sympNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and temp > 36', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/symptoms', (req, res) => {
    connection.query('SELECT count(*) as "sympNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and temp > 36', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

//Weekly
Router.get('/campus/weekly', (req, res) => {
    connection.query('SELECT count(*) as "totnum" FROM screen where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE()))', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/student/weekStud', (req, res) => {
    connection.query('SELECT count(*) as "studNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "student"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/staff/weekStaff', (req, res) => {
    connection.query('SELECT count(*) as "staffNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "staff"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/constractor/weekCons', (req, res) => {
    connection.query('SELECT count(*) as "constNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "constractor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/visitor/weekVis', (req, res) => {
    connection.query('SELECT count(*) as "visNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "visitor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/symptoms/weekSymp', (req, res) => {
    connection.query('SELECT count(*) as "sympNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and temp > 36', (err, rows, fields) => {
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
Router.get('/campus/monthly', (req, res) => {
    connection.query('SELECT count(*) as "totnum" FROM screen where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE()))', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/student/monthStud', (req, res) => {
    connection.query('SELECT count(*) as "studNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "student"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/staff/monthStaff', (req, res) => {
    connection.query('SELECT count(*) as "staffNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "staff"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/constractor/monthCons', (req, res) => {
    connection.query('SELECT count(*) as "constNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "constractor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/visitor/monthVis', (req, res) => {
    connection.query('SELECT count(*) as "visNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and role = "visitor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/symptoms/monthSymp', (req, res) => {
    connection.query('SELECT count(*) as "sympNum" FROM screen,user where camp_id = "soshn" and screen_date = (SELECT DATE(SYSDATE())) and temp > 36', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

//end of montly

Router.get('/hotspot/:campu', (req, res) => {
    connection.query('SELECT count(*) as "total_hotspot" FROM screen where camp_id = "'+ req.params.campu +'" and temp > 36.9' , (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            res.send(err)
        }
    })
});

module.exports = Router;