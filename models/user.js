module.exports = {
  user: function (db) {
    const query = `CREATE TABLE ${process.env.DBNAME}.user (id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user', username VARCHAR(35) NOT NULL COMMENT 'Username should be unique ', password VARCHAR(255) NOT NULL, last_login DATETIME NOT NULL DEFAULT now(), creation_date DATETIME NOT NULL DEFAULT now(), role VARCHAR(45) NOT NULL, PRIMARY KEY (id), UNIQUE INDEX id_UNIQUE (id ASC), UNIQUE INDEX username_UNIQUE (username ASC))`;

    return db.createTable('user', query);
  },
};
