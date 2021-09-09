const express =        require('express');
const app =            express();
const mysql =          require('mysql');
const Router =         express.Router();
const connection =     require('../connection');
const bodyParser =     require('body-parser');
const jwt =            require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

Router.post('/', (req, res, next) => {

    username = req.body.username;
    password = req.body.password;

    if (username.split("@")[1] == "tut.ac.za"){
        connection.query("SELECT * FROM user u, staff s WHERE s.staff_email = '"+ username +"' AND u.password = '"+ password +"'", (err, user, fields) => {
            if(err || user.length === 0){   
                res.send(err)
            }else{
                jwt.sign({user}, 'secretkey', { expiresIn: '3000s' }, (err, token) => {
                    res.json({token, user});
                });
            }
        })
    }else if (username.split("@")[1] == "tut4life.ac.za"){
        connection.query("SELECT * FROM user u, student s WHERE s.id_number = u.id_number AND s.stud_email = '"+ username +"' AND u.password = '"+ password +"'", (err, user, fields) => {
            if(err || user.length === 0){   
                res.send(err)
            }else{
                jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
                    res.json({token, user});
                });
            }
        })
    }else{
        res.json({ message: "Not valid username or password" })
    }
});

module.exports = Router;