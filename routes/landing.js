const express =         require('express');
const app =             express();
const mysql =           require('mysql');
const Router =          express.Router();
const connection =      require('../connection');
const bodyParser =      require('body-parser');
const jwt =             require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


// Router.get('/:camp_id',(req, res) => {
//     tot_v = connection.query('SELECT count(*) AS tot_v FROM screen where camp_id = "'+req.params.camp_id+'" AND vaccinated = "Yes" ');
//     total = connection.query('SELECT count(*) AS total FROM screen where camp_id = "'+req.params.camp_id+'"');
//     //res.send(tot_v, total);.
//     console.log(tot_v);
//     console.log(total);
// });

Router.get('/reqPolicy',(req, res,next) => {
    
        res.header('Access-Control-Allow-Origin' , "*");
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', true);
        next();
});



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

Router.post('/',(req, res) => {
    console.log(req.body);
    res.send("Yes");
    console.log("i am working fine");
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