const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost',
user :  'root',
password :  'ellbob004',
database :  'Wild_circus',
});
module.exports = connection;