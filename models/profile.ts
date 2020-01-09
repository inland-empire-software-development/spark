import {CreateTable} from "..";

const profile = async (db: CreateTable) => {
  const query = `CREATE TABLE ${process.env.DBNAME}.profile ( 
  id INT NOT NULL, 
  status INT NULL, 
  courses JSON NULL, 
  quizzes JSON NULL, 
  uploads JSON NULL, 
  about LONGTEXT NULL, 
  title VARCHAR(100) NULL, 
  city VARCHAR(45) NULL, 
  slack VARCHAR(75) NULL, 
  github VARCHAR(150) NULL, 
  linkedin VARCHAR(150) NULL, 
  website VARCHAR(200) NULL, 
  PRIMARY KEY (id), 
  UNIQUE INDEX id_UNIQUE (id ASC))`;

  return await db.createTable("profile", query);
};

export default profile;
