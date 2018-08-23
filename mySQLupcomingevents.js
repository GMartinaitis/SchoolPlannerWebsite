var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "grant",
  password: 'DRAVEN420noscope',
  database: "schoolplannerdb"
});
module.exports = con;
