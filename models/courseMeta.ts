import {CreateTable} from "..";

/**
 * Creates table for user course meta data.
 * Sample meta_keys: description, lessons, resources, students, etc..
 * Multiple rows per user. One per meta_key : meta_value pair. // TODO: Create CRUD methods to manage course keys/values
 * Visual: https://i.imgur.com/xJoPpH5.png - // TODO: Update this comment after task completed.
 * @param {db} db
 */
const courseMeta = async (db: CreateTable) => {
  const query = `CREATE TABLE ${process.env.DBNAME}.course_meta
  (
    course_meta_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    course_id bigint(20) unsigned NOT NULL DEFAULT '0',
    meta_key varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
    meta_value longtext COLLATE utf8mb4_unicode_520_ci,
    PRIMARY KEY (course_meta_id),
    KEY course_id (course_id),
    KEY meta_key (meta_key),
    UNIQUE INDEX course_meta_id_UNIQUE (course_meta_id)
  ) `;

  return await db.createTable("course_meta", query);
};

export default courseMeta;

