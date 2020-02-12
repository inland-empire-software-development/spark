import {CreateTable} from "..";

/**
 * Creates table for user meta data.
 * Sample meta_keys: status, courses, quizzes, uploads, personal information, social, etc.
 * Multiple rows per user. One per meta_key : meta_value pair. // TODO: Create CRUD methods to manage meta_keys/values
 * Visual: https://i.imgur.com/xJoPpH5.png - // TODO: Update this comment after task completed.
 * @param {db} db
 */
const userMeta = async (db: CreateTable) => {
  const query = `CREATE TABLE ${process.env.DBNAME}.user_meta
  (
    user_meta_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    user_id bigint(20) unsigned NOT NULL DEFAULT '0',
    meta_key varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
    meta_value longtext COLLATE utf8mb4_unicode_520_ci,
    PRIMARY KEY (user_meta_id),
    KEY user_id (user_id),
    KEY meta_key (meta_key),
    UNIQUE INDEX user_meta_id_UNIQUE (user_meta_id)
  ) `;

  return await db.createTable("user_meta", query);
};

export default userMeta;

