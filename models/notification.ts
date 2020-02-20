import {CreateTable} from "..";

/**
 * Creates the notification database table. Only one row per notification.
 * @param {db} db
 */
const notification = async (db: CreateTable) => {
  const query = `
    CREATE TABLE ${process.env.DBNAME}.notification (
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        title VARCHAR(150) NOT NULL,
        message VARCHAR(200) NOT NULL,
        is_read TINYINT NULL DEFAULT 0,
        type_id INT NOT NULL DEFAULT 0,
        PRIMARY KEY (id),
        UNIQUE INDEX id_UNIQUE (id ASC))
    `;

  return await db.createTable("notification", query);
};

export default notification;
