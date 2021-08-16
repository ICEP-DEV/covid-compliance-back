const express = require('express');
const app = express();
const mysql = require('mysql');
const Router = express.Router();
const connection = require('../connection');
// const tut_database = require('../tut_database_con');
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
    // user table 
    // id_number	gender	birthdate	marital_status	home_lang	citizenship	email	
    id_number = req.body.id_number;
    gender = req.body.gender;
    birthdate = req.body.birthdate;
    marital_status = req.body.marital_status;
    home_lang = req.body.home_lang;
    citizenship = req.body.citizenship;
    email = req.body.email;

    // student (stud_num, stud_email)
    stud_num = req.body.stud_num;
    stud_email = req.body.stud_email;

    // staff


    // visitor

connection.query("INSERT INTO user VALUES('"+ id_number +"', '"+ gender +"', '" + birthdate +"', '"+ marital_status +"', '"+ home_lang +"', '"+ citizenship +"', '"+ email +"')", (err, rows, fields) => {
    if(!err){
        res.send(rows);
    }else{
        console.log(err);
        }
    })

connection.query("INSERT INTO student VALUES('"+ stud_num +"', '"+ stud_email +"')", (err, rows, fields) => {
    if(!err){
        res.send(rows);
    }else{
        console.log(err);
        }
    })
    
});

module.exports = Router;