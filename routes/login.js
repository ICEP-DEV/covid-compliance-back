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

    ///checking if username and password are correct in login
    connection.query("SELECT stud_email FROM student WHERE stud_email = '"+ username +"' ", (error, stu_rows, fields) => {
        if(stu_rows.length > 0){
            connection.query("select password from user,student where student.id_number = user.id_number and  student.stud_email = '"+ username +"' ", (err, rows, fields) => {
                if(rows[0].password != password)
                {
                    //successful
                    res.json({ message: "Incorrect Student password or Username!"})
                }
            })
        }else if (stu_rows.length < 0){
            connection.query("SELECT staff_email FROM staff WHERE staff_email = '"+ username +"' ", (error, staff_rows, fields) => {
                if(staff_rows.length > 0){ 
                    connection.query("select password from user,staff where staff.id_number = user.id_number and  staff.staff_email = '"+ username +"' ", (err, rows, fields) => {
                        if(rows[0].password != password)
                        {
                            //successfully
                            res.json({ message: "Incorrect Staff password or Username!"})
                        }
                    })
                }
            })
        }
    })

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
        res.json({ message: "Username is required"})
    }
    else{
        res.json({ message: "Not TUT Email"})
    }
});

module.exports = Router;