const express =         require('express');
const app =             express();
const mysql =           require('mysql');
const Router =          express.Router();
const connection =      require('../connection');
const bodyParser =      require('body-parser');
const jwt =             require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

Router.get('/user-profile', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403); 
        } else {
            connection.query('SELECT * FROM user where role = "admin"', (err, rows, fields) => {
                if(!err){
                    res.json({message: 'DONE!', authData})
                }else{
                    console.log(err)
                }
            })
        }
    });
});

Router.get('/staff', (req, res) => {
    connection.query('SELECT * FROM user where role = "admin"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/student', (req, res) => {
    connection.query('SELECT * FROM user where role = "student"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/visitor', (req, res) => {
    connection.query('SELECT * FROM user where role = "visitor"', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = Router;