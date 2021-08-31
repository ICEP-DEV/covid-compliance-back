const express = require('express');
const app = express();
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


Router.get('/campus', (req, res) => {
    connection.query('SELECT count(*) as "totnum" FROM screen where camp_id = "rank" and screen_date = (SELECT DATE(SYSDATE()))', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/student', (req, res) => {
    connection.query('SELECT count(*) as "studNum" FROM screen,user where camp_id = "rank" and screen_date = (SELECT DATE(SYSDATE())) and role = "student"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/staff', (req, res) => {
    connection.query('SELECT count(*) as "staffNum" FROM screen,user where camp_id = "rank" and screen_date = (SELECT DATE(SYSDATE())) and role = "staff"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/constractor', (req, res) => {
    connection.query('SELECT count(*) as "constNum" FROM screen,user where camp_id = "rank" and screen_date = (SELECT DATE(SYSDATE())) and role = "constractor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/visitor', (req, res) => {
    connection.query('SELECT count(*) as "visNum" FROM screen,user where camp_id = "rank" and screen_date = (SELECT DATE(SYSDATE())) and role = "visitor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/campus/symptoms', (req, res) => {
    connection.query('SELECT count(*) as "sympNum" FROM screen,user where camp_id = "rank" and screen_date = (SELECT DATE(SYSDATE())) and temp > 36', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

module.exports = Router;