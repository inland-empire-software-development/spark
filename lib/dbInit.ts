import "reflect-metadata";
import {createConnection, getConnectionManager} from "typeorm";
import {UserDemo, CourseDemo, UserMetaDemo} from "./entity";

// Initializes a db connection pool if one doesn't yet exist, otherwise it returns
// We have a duplicate config here because of issues with this file accessing the ormconfig.js file. 🤷🏻‍♀️
// We also cannot use a file pattern match for the entities array, because this will require using
// commonjs modules in typescript compilation which nextjs does not allow you to change.
export default async () => {
  const currentConnections = getConnectionManager();
  try {
    if (currentConnections.has("default")) {
      console.info(`Using current connection (pool): ${currentConnections.get()}`);
      return;
    }
    await createConnection({
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
  } catch (error) {
    console.error(`Failed to connect to mysql: \n${error}`);
    throw new Error('Failed to establish MYSQL connection');
  }
};

