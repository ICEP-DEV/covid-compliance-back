const express = require('express');
const mysql = require('mysql');
const RegistrationRoutes = require('./routes/registration')
const ScreeningRoutes = require('./routes/screening')
const LoginRoutes = require('./routes/login')
const UserRoutes = require('./routes/user')
const UserStats = require('./routes/statistics')
const ScreenReport = require('./routes/screen_report')
const LandingState = require('./routes/landing')
const Dashboard = require('./routes/dashboard')
const connection = require('./connection');
const cors = require('cors'); 
const app = express();
const bodyParser = require('body-parser');
const ResponseLike = require('responselike');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/registration', RegistrationRoutes);
app.use('/screening', ScreeningRoutes);
app.use('/login', LoginRoutes);
app.use('/user', UserRoutes);
app.use('/statistics', UserStats);
app.use('/screen_report', ScreenReport);
app.use('/landing', LandingState);
app.use('/announcements', Dashboard);

app.use(function(req,res,next)
{
    res.header('Access-Control-Allow-Origin' , "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log("port connected server.js");
});