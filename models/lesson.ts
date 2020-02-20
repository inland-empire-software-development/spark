import {CreateTable} from "..";

/**
 * Creates the lesson database. Only one row per user.
 * @param {db} db
 */
const lesson = async (db: CreateTable) => {
  const query = `
    CREATE TABLE ${process.env.DBNAME}.lesson (
        lesson_id BIGINT(20) NOT NULL AUTO_INCREMENT,
        code VARCHAR(45) NULL,
        status TINYINT NOT NULL DEFAULT 0,
        name VARCHAR(150) NOT NULL,
        PRIMARY KEY (lesson_id),
        UNIQUE INDEX name_UNIQUE (name ASC),
        UNIQUE INDEX lesson_id_UNIQUE (lesson_id ASC),
        UNIQUE INDEX code_UNIQUE (code ASC)
    )`;

  return await db.createTable("lesson", query);
};

export default lesson;
