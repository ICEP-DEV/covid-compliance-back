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

    connection.query("SELECT * FROM user WHERE email = '"+ username +"' AND password = '"+ password +"'", (err, user, fields) => {
        if(err || user.length === 0){   
            res.send(err)
        }else{
            jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
                res.json({token});
            });
        }
    })
});

module.exports = Router;