import "reflect-metadata";
import {getConnectionManager} from "typeorm";
import {UserDemo, CourseDemo, UserMetaDemo} from "./entity";


// Initializes a db connection pool if one doesn't yet exist, otherwise it returns
// We have a duplicate config here because of issues with this file accessing the ormconfig.js file. 🤷🏻‍♀️
// We also cannot use a file pattern match for the entities array, because this will require using
// commonjs modules in typescript compilation which nextjs does not allow you to change.
export default async () => {
  const connectionManager = getConnectionManager();

  // use current connection pool is it exists, else create on
  // console.log("Has connection:", connectionManager.has("default"));
  const connection = connectionManager.has("default") ?
    connectionManager.get("default") : connectionManager.create({
      type: "mysql",
      host: process.env.DBHOST,
      port: 3306,
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DBNAME,
      entities: [
        UserDemo,
        CourseDemo,
        UserMetaDemo,
      ],
    });


  //  connection.options.entities?.forEach((entity) => {
  //    console.log(entity);
  //  });

  try {
    // console.log("isConnected: ", connection.isConnected);
    if (!connection.isConnected) {
      await connection.connect();
    }
  } catch (error) {
    console.error(`Failed to connect to mysql: \n${error}`);
    throw new Error('Failed to establish MYSQL connection');
  }
};

