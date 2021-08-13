const express = require('express');
const mysql = require('mysql');
const ClientRoutes = require('./routes/client')
const RegRoutes = require('./routes/registration')
const LoginRoutes = require('./routes/login')
const UserRoutes = require('./routes/user')
const connection = require('./connection');
const cors = require('cors'); 
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use('/client', ClientRoutes);
app.use('/registration', RegRoutes);
app.use('/login', LoginRoutes);
app.use('/user', UserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server started on port ' + PORT)); 