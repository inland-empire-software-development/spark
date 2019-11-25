const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  pool: {min: 0, max: 7}
});

db.createTable = function(table, query){
  return new Promise((resolve, reject) => {

    db.query(table, function (error, results, fields) {
      if (error) console.log(error.sqlMessage ? error.sqlMessage : error);

      if (results === undefined) {
        console.log("creating table...");
        db.query(query, function (error, results, fields) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          console.log("...table created!");
          resolve("...table created!");
        });
      } else {
        console.log("...table already exists!");
        resolve("...table already exists!");
      }
    })
  });


};

export default db;
