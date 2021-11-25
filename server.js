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
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use('/registration', RegistrationRoutes);
app.use('/screening', ScreeningRoutes);
app.use('/login', LoginRoutes);
app.use('/user', UserRoutes);
app.use('/statistics', UserStats);
app.use('/screen_report', ScreenReport);
app.use('/landing', LandingState);
app.use('/announcements', Dashboard);
require("dotenv").config(); //added

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server started on port ' + PORT)); 