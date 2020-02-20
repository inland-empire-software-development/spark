import {CreateTable} from "..";

/**
 * Creates the course database table. Only one row per course.
 * @param {db} db
 */
const course = async (db: CreateTable) => {
  const query = `
    CREATE TABLE ${process.env.DBNAME}.course (
        course_id BIGINT(20) NOT NULL AUTO_INCREMENT,
        code VARCHAR(45) NULL,
        status TINYINT NOT NULL DEFAULT 0,
        name VARCHAR(150) NOT NULL,
        PRIMARY KEY (course_id),
        UNIQUE INDEX name_UNIQUE (name ASC),
        UNIQUE INDEX course_id_UNIQUE (course_id ASC),
        UNIQUE INDEX code_UNIQUE (code ASC)
    )`;

  return await db.createTable("course", query);
};

export default course;
