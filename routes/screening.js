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

    screen_id = req.body.screen_id;
    temp = req.body.temp;
    campus = req.body.campus;
    cough = req.body.cough;
    breathing = req.body.breathing;
    fever = req.body.fever;
    symptoms = req.body.symptoms;
    contact = req.body.contact;
    covid_contact = req.body.covid_contact;
    travel = req.body.travel;
    staff_num = req.body.staff_num;
    stud_num = req.body.stud_num;
    visitor_id = req.body.visitor_id;
    camp_id = req.body.camp_id;

connection.query("INSERT INTO screen VALUES('"+ screen_id +"', '"+ temp +"', '" + campus +"', '"+ cough +"', '"+ breathing +"', '"+ fever +"', '"+ symptoms +"', '"+ contact +"', '"+ covid_contact +"', '"+ travel +"', '"+ staff_num +"', '"+ stud_num +"', '"+ visitor_id +"', '"+ camp_id +"')", (err, rows, fields) => {
    if(!err){
        res.send(rows);
    }else{
        console.log(err)
        }
    })
});

module.exports = Router;