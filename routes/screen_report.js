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

////staff report

Router.post('/report', verifyToken,(req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            if (authData.user[0].role === 'student'){
                connection.query('SELECT * FROM screen, student, user where screen.stud_staff = student.stud_num and user.id_number = student.id_number and student.stud_num = "'+authData.user[0].stud_num+'" order by screen_date desc', (err, rows, fields) => {
                    if(!err){
                        res.send(rows)
                    }else{
                        console.log(err)
                    }
                })
            }
            if (authData.user[0].role === 'staff'){
                connection.query('SELECT * FROM screen,staff,user where screen.stud_staff = staff.staff_num and user.id_number = staff.id_number and staff.staff_num = "'+authData.user[0].staff_num+'" order by screen_date desc', (err, rows, fields) => {
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

Router.delete('/delete/:id', (req, res) => {
    connection.query('DELETE FROM screen WHERE screen_id = ' +  req.params.id, (err, rows, fields) => {
        if(!err){

            connection.query('SELECT * FROM screen,staff,user where screen.stud_staff = staff.staff_num and user.id_number = staff.id_number order by screen_date desc', (err, rows, fields) => {
                if(!err){
                    res.send(rows)
                }else{
                    console.log(err)
                }
            })
            // res.send("deleted successfuly")
            console.log('deleted successfuly')
        }else{
            console.log(err)
        }
    })
});
//run for screen report on admin
// Router.get('/report', (req, res) => {
    //days = req.body.numDays;
    //studStaff = req.body.numStudStaff

//connection.query('SELECT * FROM screen,staff,user where screen.stud_staff = staff.staff_num and user.id_number = staff.id_number and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and length(stud_staff)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
//         if(!err){
//             res.send(rows)
//         }else{
//             console.log(err)
//         }
//     })
// });


///end of Admin report

// Router.post('/admin', verifyToken,(req, res) => {
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if(err) {
//             res.sendStatus(403);
//         } else {
//             days = req.body.duration;
//             studStaff = req.body.role;

//             connection.query('SELECT * FROM screen,staff,user where screen.stud_staff = staff.staff_num and user.id_number = staff.id_number and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and length(stud_staff)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
//                 if(!err){
//                     res.send(rows)
//                 }else{
//                     console.log(err)
//                 }
//             })
//         }
//     });
// });
Router.post('/admin',(req, res) => {
        days = req.body.duration;
        studStaff = req.body.role;
        choice = req.body.temp

        if(studStaff == 6)
        {
            if(choice === "above")
            {
                connection.query('SELECT * FROM screen,staff,user where screen.stud_staff = staff.staff_num and user.id_number = staff.id_number and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp >= 37 and length(stud_staff)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                            if(!err){
                                res.send(rows)
                            }else{
                                console.log(err)
                            }
                        })
            }else if(choice==="below")
            {
                connection.query('SELECT * FROM screen,staff,user where screen.stud_staff = staff.staff_num and user.id_number = staff.id_number and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp < 37 and length(stud_staff)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                    if(!err){
                        res.send(rows)
                    }else{
                        console.log(err)
                    }
                })
            }else if(choice==="all")
            {
                connection.query('SELECT * FROM screen,staff,user where screen.stud_staff = staff.staff_num and user.id_number = staff.id_number and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp >= 0 and length(stud_staff)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                    if(!err){
                        res.send(rows);
                    }else{
                        console.log(err)
                    }
                })
            }
            
        }
        else if(studStaff == 9){

            if(choice === "above")
            {

                connection.query('SELECT * FROM screen,student,user where screen.stud_staff = student.stud_num and user.id_number = student.id_number and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp >= 37 and length(stud_staff)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                    if(!err){
                        res.send(rows)
                    }else{
                        console.log(err)
                    }
                })
            }else if(choice==="below")
            {
                connection.query('SELECT * FROM screen,student,user where screen.stud_staff = student.stud_num and user.id_number = student.id_number and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp < 37 and length(stud_staff)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                    if(!err){
                        res.send(rows)
                    }else{
                        console.log(err)
                    }
                })
            }else if(choice === "all")
            {
                connection.query('SELECT * FROM screen,student,user where screen.stud_staff = student.stud_num and user.id_number = student.id_number and screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp >= 0 and length(stud_staff)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                    if(!err){
                        res.send(rows)
                    }else{
                        console.log(err)
                    }
                })
            }
        }else if(studStaff == 13){
            if(choice === "above")
            {
                connection.query('SELECT * FROM screen where screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp >= 37 and length(visitor_id)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                            if(!err){
                                res.send(rows)
                            }else{
                                console.log(err)
                            }
                        })
            }else if(choice==="below")
            {
                connection.query('SELECT * FROM screen where screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp < 37 and length(visitor_id)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                    if(!err){
                        res.send(rows)
                    }else{
                        console.log(err)
                    }
                })
            }else if(choice==="all")
            {
                connection.query('SELECT * FROM screen where screen_date BETWEEN DATE_ADD(date(sysdate()), INTERVAL -"'+days+'" Day) and date(sysdate()) and temp >= 0 and length(visitor_id)="'+studStaff+'" order by screen_date desc', (err, rows, fields) => {
                    if(!err){
                        res.send(rows);
                    }else{
                        console.log(err)
                    }
                })
            }
        }

            
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