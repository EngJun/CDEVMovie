var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'ssh -i "AWSDemo.pem" ubuntu@ec2-54-174-250-183.compute-1.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'password',
    database: 'movie_info'
});

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To AWSDB');
}); 
module.exports = connection;

