import db from '../lib/db';
const escape = require('sql-string-escape');

module.exports = {
  user: function() {
    db.schema.hasTable('users').then(function(exists) {
      if (!exists) {
        return db.raw(escape(
            "`CREATE TABLE `iesd_portal`.`users` (
            `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user',
            `username` VARCHAR(35) NOT NULL COMMENT 'Username should be unique ',
            `password` VARCHAR(255) NOT NULL,
            `last_login` DATETIME NOT NULL,
            `creation_date` DATETIME NOT NULL DEFAULT now(),
            `token` VARCHAR(255) NOT NULL,
            `role` VARCHAR(45) NOT NULL,
            PRIMARY KEY (`id`),
            UNIQUE INDEX `id_UNIQUE` (`id` ASC),
            UNIQUE INDEX `username_UNIQUE` (`username` ASC))`"
        )) 
        return db.schema.createTable('users', function(table) {
          table.increments('id').primary().unique();
          table.string('username', 100);
          table.string('role', 45);
          table.string('password', 255);
          table.dateTime('created', {precision: 6});
          table.dateTime('last_login', {precision: 6});
        });

         
      }
    });
  }
};
