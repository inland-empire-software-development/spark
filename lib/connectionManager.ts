import "reflect-metadata";
// import {createConnection} from "typeorm";
import {getConnectionManager} from "typeorm";

const connectionManager = getConnectionManager();
const connection = connectionManager.create({
  type: "mysql",
});

console.log(connection);

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
