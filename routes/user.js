const express =         require('express');
const app =             express();
const mysql =           require('mysql');
const Router =          express.Router();
const connection =      require('../connection');
const bodyParser =      require('body-parser');
const jwt =             require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

Router.post('/dashboard', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.send(authData.user)
        }
    });
});

Router.post('/admin-profile', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.send(authData.user)
        }
    });
});

Router.post('/staff-profile', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.send(authData.user)
        }
    });
});

Router.post('/student-profile', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.send(authData.user)
        }
    });
});

// end profils

Router.get('/staff', (req, res) => {
    connection.query('SELECT * FROM user u, staff s where s.staff_role = "staff" AND u.id_number = s.id_number', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.get('/student', (req, res) => {
    connection.query('SELECT * FROM user u, student s where role = "student" AND u.id_number = s.id_number', (err, rows, fields) => {
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

Router.get('/allusers', (req, res) => {
    connection.query('SELECT COUNT(*) AS total FROM user', (err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
});

Router.post('/edit_admin', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {

    fname = req.body.fname;
    lname = req.body.lname;
    email = req.body.email;
    address = req.body.address;

        var sql = "UPDATE user SET fname = '"+ fname +"', lname = '"+ lname +"', email = '"+ email +"', address = '"+ address +"' WHERE id_number = '"+ authData.user[0].id_number + "'";
        connection.query(sql, (err, user, fields) => {
            if (err){
                console.log(err)
                console.log(authData)
            }else{
                res.json({ message: "record(s) updated"})
            };
        });
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