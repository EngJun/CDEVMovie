var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'database-1.cqfpkqfsbguf.us-east-1.rds.amazonaws.com',
    port: '3000',
    user: 'admin',
    password: 'password',
    database: 'movie_info'
});

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To AWSDB');
}); 
module.exports = connection;

