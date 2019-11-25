import db from '../lib/db';

module.exports = {
  user: function() {
    const userTableExists = `SELECT * FROM iesd_portal.user`;
    const userCreateTable = `CREATE TABLE iesd_portal.user (id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user', username VARCHAR(35) NOT NULL COMMENT 'Username should be unique ', password VARCHAR(255) NOT NULL, last_login DATETIME NOT NULL, creation_date DATETIME NOT NULL DEFAULT now(), token VARCHAR(255) NOT NULL, role VARCHAR(45) NOT NULL, PRIMARY KEY (id), UNIQUE INDEX id_UNIQUE (id ASC), UNIQUE INDEX username_UNIQUE (username ASC))`;

    db.query(userTableExists, function(error, results, fields) {
      if (error) console.log(error);
      if (results === undefined) {
        db.query(userCreateTable, function(error, results, fields) {
          if (error) console.log(error);

          console.log('creating DB');

        });
      }
    });

  },
};
