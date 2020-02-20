import {CreateTable} from "..";

/**
 * Creates table for site options.
 * Sample option_key: admin_email, home url, theme settings, logo, etc.
 * Multiple rows per user. One per meta_key : meta_value pair. // TODO: Create CRUD methods to manage option_keys/values
 * Visual: https://i.imgur.com/xJoPpH5.png - // TODO: Update this comment after task completed.
 * @param {db} db
 */
const profile = async (db: CreateTable) => {
  const query = `CREATE TABLE ${process.env.DBNAME}.options
  (
    option_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    meta_key varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
    meta_value longtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
    autoload tinyint NOT NULL DEFAULT 0,
    PRIMARY KEY (option_id),
    KEY key (meta_key),
    UNIQUE INDEX option_id_UNIQUE (option_id),
    UNIQUE INDEX meta_key_UNIQUE (meta_key),
  ) `;

  return await db.createTable("user_meta", query);
};

export default profile;

