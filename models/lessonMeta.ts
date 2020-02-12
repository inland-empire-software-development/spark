import {CreateTable} from "..";

/**
 * Creates table for user lesson meta data.
 * Sample meta_keys: description, lessons, resources, students, etc..
 * Multiple rows per user. One per meta_key : meta_value pair. // TODO: Create CRUD methods to manage lesson keys/values
 * Visual: https://i.imgur.com/xJoPpH5.png - // TODO: Update this comment after task completed.
 * @param {db} db
 */
const lessonMeta = async (db: CreateTable) => {
  const query = `CREATE TABLE ${process.env.DBNAME}.lesson_meta
  (
    lesson_meta_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    lesson_id bigint(20) unsigned NOT NULL DEFAULT '0',
    meta_key varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
    meta_value longtext COLLATE utf8mb4_unicode_520_ci,
    PRIMARY KEY (lesson_meta_id),
    KEY lesson_id (lesson_id),
    KEY meta_key (meta_key),
    UNIQUE INDEX lesson_meta_id_UNIQUE (lesson_meta_id)
  ) `;

  return await db.createTable("lesson_meta", query);
};

export default lessonMeta;

