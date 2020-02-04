/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import {CreateTable} from "..";

const user_meta = async (db: CreateTable) => {
  const query = `CREATE TABLE${process.env.DBNAME}.user_meta (
        id INT NOT NULL,
        first_name VARCHAR(60) NULL,
        last_name VARCHAR(100) NULL,
        title VARCHAR(150) NULL,
        description VARCHAR(500) NULL DEFAULT 'This user has an air of mystery around them.',
        avatar VARCHAR(250) NULL,
        website VARCHAR(250) NULL,
        linkedin VARCHAR(250) NULL,
        twitter VARCHAR(250) NULL,
        slack VARCHAR(100) NULL,
        email VARCHAR(250) NULL,
        skills JSON NULL,
        location JSON NULL,
        PRIMARY KEY (id),
        UNIQUE INDEX id_UNIQUE (id ASC))`;

  return await db.createTable("user_meta", query);
};

export default user_meta;
