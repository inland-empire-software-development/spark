/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import {Message, ArrayIndexedWithStrings} from "..";
import fetch from "isomorphic-unfetch";

const escape = require('sql-string-escape');
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
 * Allows us to pull meta_keys from the database.
 * @param {object} opts - takes in the key, table, identifier and value to find match in dateebases
 * @return {Promise}
 */
db.getKey = function(opts: {key: string; table: string; identifier?: string; value?: string}) {
  const {key, table, identifier, value} = opts;
  let query = `SELECT meta_value FROM ${process.env.DBNAME}.${table} WHERE meta_key = ${escape(key)}`;

  if (identifier && value) {
    query += ` AND ${identifier} = ${value}`;
  }

  return new Promise((resolve, reject) => {
    db.query(query,
        function(error: { sqlMessage: any }, results: string | any[]) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          resolve(results.length !== 0 ? results[0] : false);
        });
  });
};


/**
 * Allows us to pull meta_keys from the database.
 * @param {object} opts - takes in the key [], table, identifier and value to find matches in dateebases
 * @return {Promise}
 */
db.getKeys = function(opts: {key?: Array<string>; table: string; identifier?: string; value?: string}) {
  const {key, table, identifier, value} = opts;
  const query = `SELECT meta_key, meta_value FROM ${process.env.DBNAME}.${table} WHERE ${identifier} = ${escape(value)}`;


  return new Promise((resolve, reject) => {
    db.query(query,
        function(error: { sqlMessage: any }, results: any) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          if (results.length !== 0 && key && key.length !== 0) {
            const keys: ArrayIndexedWithStrings = {};

            results
                .filter((metadata: {meta_key: string; meta_value: string}) => key.includes(metadata.meta_key))
                .map((metadata: {meta_key: string; meta_value: string}) => keys[metadata.meta_key] = metadata.meta_value);

            resolve(keys);
          }
        });
  });
};

/**
 * Gets the current count of unread messages.
 * @param {object} opts
 * @return {number}
 */
db.getMessageCount = function(opts: { user: string; userID: string }) {
  const {user, userID} = opts;
  const query = `
  SELECT COUNT(*) 
  FROM ${process.env.DBNAME}.message 
  WHERE recipient_id = ${escape(userID)} 
  AND is_read = 0;`;

  return new Promise((resolve, reject) => {
    db.query(query,
        function(error: { sqlMessage: any }, results: any) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          if (results !== undefined && results.length !== 0 && user) {
            const count = results[0]['COUNT(*)'];
            resolve(count);
          } else {
            resolve(0);
          }
        },
    );
  });
};

/**
 * Gets the current count of unread notifications.
 * @param {object} opts
 * @return {number}
 */
db.getNotificationCount = function(opts: { user: string; userID: string }) {
  const {user, userID} = opts;
  const query = `
  SELECT COUNT(*) 
  FROM ${process.env.DBNAME}.notification 
  WHERE user_id = ${escape(userID)} 
  AND is_read = 0;`;

  return new Promise((resolve, reject) => {
    db.query(query,
        function(error: { sqlMessage: any }, results: any) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);
          if (results !== undefined && results.length !== 0 && user) {
            const count = results[0]['COUNT(*)'];
            resolve(count);
          } else {
            resolve(0);
          }
        },
    );
  });
};

// Password
db.createPassword = function(pass: string): string {
  const salt: string = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pass, salt);
};

// User methods
db.getUser = function(user: string): object | boolean {
  return new Promise((resolve, reject) => {
    db.query(`SELECT id, last_login, confirmation, password FROM ${process.env.DBNAME}.user WHERE username = ${escape(user)}`,
        function(error: { sqlMessage: any }, results: string | any[]) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          // returns only the first user it finds - token, last_login date and password
          resolve(results.length !== 0 ? results[0] : false);
        });
  });
};

db.getUserByEmail = function(email: string): object | boolean {
  return new Promise((resolve, reject) => {
    db.query(`SELECT id, username, password_reset FROM ${process.env.DBNAME}.user WHERE email = ${escape(email)}`,
        function(error: { sqlMessage: any }, results: string | any[]) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);
          const status = results.length !== 0;

          // returns only the first user it finds - assumes it will only have one to choose from
          resolve({
            status,
            message: status ? "User found." : "User not found.",
            data: status ? {...results[0]} : false,
          });
        });
  });
};

db.userExists = function(user: string): Promise<object> {
  return new Promise((resolve, reject) => {
    db.query(`SELECT id FROM ${process.env.DBNAME}.user WHERE username = ${escape(user)}`,
        function(error: { sqlMessage: any }, results: string | any[]) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          // returns only the first user it finds - only the ID
          resolve(results.length !== 0 ? results[0] : false);
        });
  });
};

db.createUser = function(user: string, pass: string, email: string, role: string): Promise<object> {
  return new Promise((resolve, reject) => {
    const hash: string = db.createPassword(pass);
    const token: string = bcrypt.genSaltSync(16); // will be used to confirm email - set to false after confirmation
    db.query(`INSERT INTO ${process.env.DBNAME}.user (username, password, email, role, confirmation) VALUES ('${user}', '${hash}', '${email}', '${role}', '${token}')`,
        function(error: { sqlMessage: any }, results: object) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          results !== undefined && results.hasOwnProperty('insertId') ?
              resolve(Object.assign(results, {token})) :
              reject(results);
        });
  });
};

db.createTable = function(tableName: string, query: any) {
  console.log(`\nAttempting to create ${tableName} table...`);

  return new Promise((resolve, reject) => {
    // checks if table exists in this database
    db.query(`SELECT * FROM ${process.env.DBNAME}.${tableName}`, function(error: any, results: any) {
      if (error) console.log('Error found: ', error.sqlMessage ? error.sqlMessage : error);

      // if table exists
      if (results === undefined) {
        console.log(`Creating ${tableName} table...`);

        // create the table using query passed in
        db.query(query, function(error: { sqlMessage: any }) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          resolve({
            status: true,
            message: `${tableName} table creation successful.`,
          } as Message);

          console.log(`${tableName} table creation completed!\n`);

          return true;
        });
      } else {
        resolve({
          status: false,
          message: `${tableName} table already exists.`,
        } as Message);

        return false;
      }
    });
  });
};

// Email methods
db.emailExists = function(email: string): Promise<object> {
  return new Promise((resolve, reject) => {
    db.query(`SELECT id FROM ${process.env.DBNAME}.user WHERE email = ${escape(email)}`,
        function(error: { sqlMessage: any }, results: string | any[]) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          // returns only the first user it finds - only the ID
          resolve(results.length !== 0 ? results[0] : false);
        });
  });
};

db.emailConfirmed = function(user: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    db.query(`SELECT confirmation FROM ${process.env.DBNAME}.user WHERE username = ${escape(user)}`,
        function(error: { sqlMessage: any }, results: string | any[]) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          // check if confirmation is set to false or not (true == confirmed)
          resolve(results.length !== 0 ? results[0] === false : false);
        });
  });
};

db.confirmEmail = function(user: string, token: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    // Get current confirmation token from the DB for user in question
    db.query(`SELECT confirmation FROM ${process.env.DBNAME}.user WHERE username = ${escape(user)}`,
        function(error: any, results: any) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          // check if data was found
          if (results.length !== 0) {
            const {confirmation} = results[0]; // get confirmation token

            // if account is already active, let user know
            if (confirmation == 'active') {
              resolve(confirmation);
            } else if (confirmation === token) {
              // token matched - set token to active
              db.query(`UPDATE ${process.env.DBNAME}.user SET confirmation = 'active' WHERE username = ${escape(user)}`,
                  function(error: any, results: any) {
                    if (error) reject(error.sqlMessage ? error.sqlMessage : error);

                    // return results - we assume this will work.
                    resolve(results);
                  });
            } else {
              reject(Error("Token is not valid, account not activated."));
            }
          } else {
            reject(Error("The data is invalid."));
          }
        });
  });
};

// Password methods
db.initiatePasswordReset = function(user: string, email: string): Promise<Message> {
  const token: string = bcrypt.genSaltSync(16); // generates a token for password_token column.

  return new Promise((resolve, reject) => {
    db.query(`UPDATE ${process.env.DBNAME}.user SET password_reset = 1, password_token = '${token}' WHERE username = ${escape(user)}`,
        function(error: any, results: any) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);

          if (results.serverStatus === 2) {
            const data = {
              action: 'reset',
              data: {
                token,
              },
              username: user,
              email,
            };

            fetch(`${process.env.HOST}api/mail`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((result: Message) => {
                  // return results - we assume this will work.
                  resolve({
                    status: result.status,
                    message: result.status ? "request submitted" : "request denied",
                  } as Message);
                });
          }
        });
  });
};

db.verifyPasswordToken = function(email: string, token: string): Promise<Message> {
  return new Promise((resolve, reject) => {
    db.query(`SELECT password_token FROM ${process.env.DBNAME}.user WHERE email = ${escape(email)}`,
        function(error: any, results: any) {
          if (error) reject(error.sqlMessage ? error.sqlMessage : error);
          const processedToken = token.replace(/%24/g, "$"); // TODO: Find better way to decode %24 to $
          const status = results.length !== 0 && results[0].password_token === processedToken;

          resolve({
            status,
            message: status ? "Token matched." : "Token did not match",
          } as Message);

          return true;
        });
  });
};

db.passwordReset = function(user: string, token: string, password: string): Promise<Message> {
  return new Promise((resolve, reject) => {
    const pass: string = db.createPassword(decodeURIComponent(password)); // create new password using new password

    // update password_reset, password_token, password
    // find user by username and password_token
    db.query(`
    UPDATE ${process.env.DBNAME}.user 
    SET password_reset = 0, password_token = '', password = ${escape(decodeURIComponent(pass))} 
    WHERE username = ${escape(decodeURIComponent(user))} 
    AND password_token = ${escape(decodeURIComponent(token))}`,
    function(error: any, results: any) {
      if (error) reject(error.sqlMessage ? error.sqlMessage : error);
      if (results !== undefined) {
        const status = (results.serverStatus === 2 && results.changedRows !== 0) as boolean;

        resolve({
          status,
          message: status ? "Password reset request processed." : "Password reset unsuccessful.",
        } as Message);
      }
    });
  });
};

export default db;
