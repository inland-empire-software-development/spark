import escape from 'sql-string-escape';

const bcrypt = require('bcryptjs');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  pool: {min: 0, max: 7},
});

/**
 * Create tables
 * @param name - name of table to create (will check existence first)
 * @param query - query to run to create table and columns
 * @returns {Promise<unknown>}
 */
db.createTable = function(name, query) {
  console.log(`attempting to create ${name} table...`);

  return new Promise((resolve, reject) => {
    // checks if table exists in this database
    db.query(`SELECT * FROM ${process.env.DBNAME}.${name}`, function(error, results, fields) {
      if (error) console.log(error.sqlMessage ? error.sqlMessage : error);

      // if table exists
      if (results === undefined) {
        console.log(`creating ${name} table...`);

        // create the table using query passed in
        db.query(query, function(error, results, fields) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);
          resolve({
            message: `...${name} table created!`,
          });
        });
      } else {
        resolve({
          message: `${name} table already exists!`,
        });
      }
    });
  });

};

db.getUser = function(user) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT token, last_login, password FROM ${process.env.DBNAME}.user WHERE username = ${escape(user)}`,
        function(error, results, fields) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          // returns only the first user it finds - token, last_login date and password
          resolve(results.length !== 0 ? results[0] : false);
        });
  });
};

db.createUser = function(user, pass, token) {
  return new Promise((resolve, reject) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    db.query(`INSERT INTO iesd_portal.user (username, password, role) VALUES (${user}, ${hash}, ${token})`,
        function(error, results, fields) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          resolve(results.length !== 0 ? results[0] : false);
        });
  });
};
export default db;
