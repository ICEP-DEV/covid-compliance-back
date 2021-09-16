const express =         require('express');
const app =             express();
const mysql =           require('mysql');
const Router =          express.Router();
const connection =      require('../connection');
const bodyParser =      require('body-parser');
const jwt =             require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

Router.get('/user', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.send(authData.user)
        }
    });
});

Router.post('/admin', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            connection.query('SELECT * FROM screen', (err, rows, fields) => {
                if(!err){
                    res.send(rows)
                }else{
                    console.log(err)
                }
            })
        }
    });
});

Router.post('/stud_staff', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            if (authData.user[0].role === 'student'){
                connection.query('SELECT * FROM screen where stud_staff = ' + authData.user[0].stud_num, (err, rows, fields) => {
                    if(!err){
                        res.send(rows)
                    }else{
                        console.log(err)
                    }
                })
            }
            if (authData.user[0].role === 'staff'){
                connection.query('SELECT * FROM screen where stud_staff = ' + authData.user[0].staff_num, (err, rows, fields) => {
                    if(!err){
                        res.send(rows)
                    }else{
                        console.log(err)
                    }
                })
            }
        }
    });
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
        console.log("verifyToken");
    }
}

module.exports = Router;