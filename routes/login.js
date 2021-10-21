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

    //////////////////////////////////////

    if (username.split("@")[1] == "tut.ac.za"){
        connection.query("SELECT * FROM user u, staff s WHERE u.id_number = s.id_number and s.staff_email = '"+ username +"' AND u.password = '"+ password +"'", (err, user, fields) => {
            if(user.length === 0){
                res.json({ message: "Not valid username or password" })
            }else{
                jwt.sign({user}, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                    res.json({token, user});
                });
            }
        })
    }else if (username.split("@")[1] == "tut4life.ac.za"){
        connection.query("SELECT * FROM user u, student s WHERE s.id_number = u.id_number AND s.stud_email = '"+ username +"' AND u.password = '"+ password +"'", (err, user, fields) => {
            if(user.length === 0){   
                res.send(err);
                res.json({ message: "Not valid username or password" })
            }else{
                jwt.sign({user}, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                    res.json({token, user});
                });
            }
        })
    }else if(username.length === 0)
    {
        res.json({ message: "Username required."})
    }
    else{
        res.json({ message: "Not TUT Email"})
    }
});

module.exports = Router;