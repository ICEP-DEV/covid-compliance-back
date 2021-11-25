const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'bce450d24b66fe',
    password: '9c1fa31b',
    database: 'heroku_88bb8ef8f2c3882'
  }) //mysql://bce450d24b66fe:9c1fa31b@us-cdbr-east-04.cleardb.com/heroku_88bb8ef8f2c3882?reconnect=true
  
  connection.connect()
  
  connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err
  
    console.log('Connected The solution is: ', rows[0].solution)
  })

module.exports = connection;