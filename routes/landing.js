const express =         require('express');
const app =             express();
const mysql =           require('mysql');
const Router =          express.Router();
const connection =      require('../connection');
const bodyParser =      require('body-parser');
const jwt =             require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Router.get('/:camp_id',(req, res) => {
//     tot_v = connection.query('SELECT count(*) AS tot_v FROM screen where camp_id = "'+req.params.camp_id+'" AND vaccinated = "Yes" ');
//     total = connection.query('SELECT count(*) AS total FROM screen where camp_id = "'+req.params.camp_id+'"');
//     //res.send(tot_v, total);.
//     console.log(tot_v);
//     console.log(total);
// });

Router.get('/:camp_id',(req, res) => {
    connection.query('SELECT count(*) AS tot_v FROM screen where camp_id = "'+req.params.camp_id+'" AND vaccinated = "Yes" '  , (err, rows, fields) => {
        if(!err){
            //let avg = (rows.tot_v/lines)*100;   console.log(line)
            res.send(rows);
        }else{
            console.log("rows err", err)
        }
    })
});

// Router.get('/screen_rows/:camp_id', (req, res) => {
//     connection.query('SELECT count(*) AS total FROM screen where camp_id = "'+req.params.camp_id+'"', (error, total, fields) => {
//             if(!error){
//                 res.send(total);
//             }else{
//             console.log("lines err", error)
//         }
//     }) 
// });

module.exports = Router;