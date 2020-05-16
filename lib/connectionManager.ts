import "reflect-metadata";
// import {createConnection} from "typeorm";
import {getConnectionManager} from "typeorm";
import {CourseDemo} from "./entity";

// Option 1 initizlie with createConnection - makes getConnection available through app
// Concerned this may try to initialize the connection many times
// export default (async () => {
//   try {
//     const connection = await createConnection({
//       type: "mysql",
//       host: process.env.DBHOST,
//       port: 3306,
//       username: process.env.DBUSER,
//       password: process.env.DBPASSWORD,
//       database: process.env.DBNAME,
//       entities: [
//         "lib/entity/**/*.ts",
//       ],
//       migrations: [
//         "lib/migration/**/*.ts",
//       ],
//     });
//     console.info(`Successfully created connection to mysql via typeorm: ${connection.name}`);
//     return connection;
//   } catch (error) {
//     console.error(`Failed to connect to mysql: \n${error}`);
//     throw new Error('Failed to establish MYSQL connection');
//   }
// })().catch((e) => {
//   console.error(e);
// });

// Option 2 initialize a ConnectionManager. Export this manager and use "get" to get connection
// in the application

console.log(`In connection manager: synchronize: ${process.env.NODE_ENV === "development"}`);

const connectionManager = getConnectionManager();
const connection = connectionManager.create({
  type: "mysql",
  host: process.env.DBHOST,
  port: 3306,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  synchronize: process.env.NODE_ENV === "development",
  entities: [
    CourseDemo,
  ],
  // migrations: [
  //   "lib/migration/**/*.ts",
  // ],
});

(async () => {
  try {
    await connection.connect();
  } catch (error) {
    console.error(`Failed to connect to mysql: \n${error}`);
    throw new Error('Failed to establish MYSQL connection');
  }
})().catch((e) => {
  console.error(e);
});

export default connectionManager;
