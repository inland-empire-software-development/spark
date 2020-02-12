import {CreateTable} from "..";

/**
 * Creates the message database table. Only one row per message.
 * @param {db} db
 */
const message = async (db: CreateTable) => {
  const query = `
    CREATE TABLE ${process.env.DBNAME}.message (
        id INT NOT NULL AUTO_INCREMENT,
        timestamp DATETIME NOT NULL DEFAULT NOW(),
        sender_id INT NOT NULL,
        recipient_id INT NOT NULL,
        body VARCHAR(350) NOT NULL,
        is_read TINYINT NULL DEFAULT 0,
        expiry_date DATETIME NULL COMMENT 'This column is the cut-off date when reminders will no longer be sent to users.',
        recipient_group LONGTEXT NULL,
        is_reminder TINYINT NULL DEFAULT 0 COMMENT 'This column flags whether or not a reminder is required for the message.',
        next_remind_date DATETIME NULL COMMENT 'This column holds the date when the next reminder needs to be sent. The reminder will be sent on the next_remind_date for the users for whom the ‘is_read’ flag is still ZERO. A new value for this column will be calculated every time a reminder is sent.',
        reminder_frequency_id INT NULL COMMENT 'This column signifies the frequency of the reminder. Should it be on daily basis or weekly basis?',
        ephemeral TINYINT NULL DEFAULT 0 COMMENT 'If set to true, we will delete this message on specific date.',
        removal_date DATETIME NULL COMMENT 'Date for ephemeral message to be removed.',
        type TINYINT NOT NULL DEFAULT 0 COMMENT 'Zero means this is a normal message, One means this is a system message.',
        PRIMARY KEY (id),
        UNIQUE INDEX id_UNIQUE (id ASC)
    )`;

  return await db.createTable("message", query);
};

export default message;
