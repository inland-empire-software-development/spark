import * as mysql from "mysql";
// import * as bluebird from "bluebird";
import {promisify} from "util";


const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  connectionLimit: 7,
  multipleStatements: true,
});

/*
* Still a pain in the ass to use promisify with overloaded definitions of mysql.QueryFunction
* https://github.com/microsoft/TypeScript/issues/26048
* Therefore, we'll stick to only allowing  (options: string | QueryOptions, callback?: queryCallback)
* In the end, this means that when calling queryAsync, we will not be able to query with (sqlString, values)
* If we want to use values, we must pass a QueryOptions object, which itself can take values
*/

// SQL query just so we don't have to rewrite the following repeatedly

export type SqlQuery = string | mysql.QueryOptions;
export const queryAsync = promisify<SqlQuery, any>(pool.query);
// export default pool;
