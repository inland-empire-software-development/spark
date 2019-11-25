const mysql      = require('mysql');
const db = mysql.createConnection({
  host : process.env.DBHOST,
  user : process.env.DBUSER,
  password : process.env.DBPASSWORD,
  database : process.env.DBNAME,
  pool: { min: 0, max: 7 }
});

export default db;
