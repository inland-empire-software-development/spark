import {MigrationInterface, QueryRunner} from "typeorm";

export class First1591321559151 implements MigrationInterface {
    name = 'First1591321559151'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE `user_meta` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(255) NULL, `last_name` varchar(255) NULL, `avatar_url` varchar(255) NULL, `status` varchar(255) NULL, `website` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `user` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL COMMENT 'Username should be unique', `password` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `role` varchar(255) NOT NULL, `confirmation` varchar(255) NOT NULL, `password_reset` tinyint NOT NULL, `password_token` varchar(255) NULL, `last_login` datetime NOT NULL, `user_meta_id` int NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), UNIQUE INDEX `REL_ec03dddce46b4c14e25b70f9dc` (`user_meta_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `course_meta` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `hero_image` varchar(255) NULL, `status` varchar(255) NULL, `user_ranking` varchar(255) NULL, `user_comments` varchar(255) NULL, `description` varchar(255) NULL, `resources` varchar(255) NULL, `card_image` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `course` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `code` varchar(255) NOT NULL, `status` tinyint NOT NULL, `name` varchar(255) NOT NULL, `instructor` varchar(255) NOT NULL, `course_meta_id` int NULL, UNIQUE INDEX `IDX_5cf4963ae12285cda6432d5a3a` (`code`), UNIQUE INDEX `IDX_30d559218724a6d6e0cc4f26b0` (`name`), UNIQUE INDEX `REL_39771e8c4e736234efaaf69021` (`course_meta_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `lesson_meta` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `lesson_date` datetime NULL, `due_date` datetime NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `lesson` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `code` varchar(255) NULL, `status` tinyint NOT NULL, `name` varchar(255) NOT NULL, `lesson_meta_id` int NULL, UNIQUE INDEX `IDX_0622d5d889bcbc142a90be1dfc` (`code`), UNIQUE INDEX `IDX_c60c736b10b5dafeb0923d5c1f` (`name`), UNIQUE INDEX `REL_80b9f53d9545c1d4dbf0370bfe` (`lesson_meta_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `message` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `sender_id` int NOT NULL, `recipient_id` int NOT NULL, `body` varchar(255) NOT NULL, `is_read` tinyint NULL DEFAULT 0, `expiry_date` datetime NULL, `recipient_group` longtext NULL, `is_reminder` tinyint NULL DEFAULT 0, `next_remind_date` datetime NULL, `reminder_frequency_id` int NULL, `ephemeral` tinyint NULL DEFAULT 0, `removal_date` datetime NULL, `type` tinyint UNSIGNED NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `notification` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `title` varchar(255) NOT NULL, `message` varchar(255) NOT NULL, `is_read` tinyint NOT NULL DEFAULT 0, `type_id` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `options` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int NOT NULL AUTO_INCREMENT, `meta_key` varchar(255) NOT NULL, `meta_value` longtext NOT NULL, `autoload` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX `IDX_3fca302083ab190935681f7e40` (`meta_key`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
      await queryRunner.query("CREATE TABLE `course_users` (`userId` int NOT NULL, `courseId` int NOT NULL, INDEX `IDX_ec0b6388e3b40c292c8ae1d2f0` (`userId`), INDEX `IDX_32e114cc1e4199c7de081e092a` (`courseId`), PRIMARY KEY (`userId`, `courseId`)) ENGINE=InnoDB");
      await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_ec03dddce46b4c14e25b70f9dc8` FOREIGN KEY (`user_meta_id`) REFERENCES `user_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE `course` ADD CONSTRAINT `FK_39771e8c4e736234efaaf69021b` FOREIGN KEY (`course_meta_id`) REFERENCES `course_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_80b9f53d9545c1d4dbf0370bfe2` FOREIGN KEY (`lesson_meta_id`) REFERENCES `lesson_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_ec0b6388e3b40c292c8ae1d2f07` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_32e114cc1e4199c7de081e092a1` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_32e114cc1e4199c7de081e092a1`");
      await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_ec0b6388e3b40c292c8ae1d2f07`");
      await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_80b9f53d9545c1d4dbf0370bfe2`");
      await queryRunner.query("ALTER TABLE `course` DROP FOREIGN KEY `FK_39771e8c4e736234efaaf69021b`");
      await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_ec03dddce46b4c14e25b70f9dc8`");
      await queryRunner.query("DROP INDEX `IDX_32e114cc1e4199c7de081e092a` ON `course_users`");
      await queryRunner.query("DROP INDEX `IDX_ec0b6388e3b40c292c8ae1d2f0` ON `course_users`");
      await queryRunner.query("DROP TABLE `course_users`");
      await queryRunner.query("DROP INDEX `IDX_3fca302083ab190935681f7e40` ON `options`");
      await queryRunner.query("DROP TABLE `options`");
      await queryRunner.query("DROP TABLE `notification`");
      await queryRunner.query("DROP TABLE `message`");
      await queryRunner.query("DROP INDEX `REL_80b9f53d9545c1d4dbf0370bfe` ON `lesson`");
      await queryRunner.query("DROP INDEX `IDX_c60c736b10b5dafeb0923d5c1f` ON `lesson`");
      await queryRunner.query("DROP INDEX `IDX_0622d5d889bcbc142a90be1dfc` ON `lesson`");
      await queryRunner.query("DROP TABLE `lesson`");
      await queryRunner.query("DROP TABLE `lesson_meta`");
      await queryRunner.query("DROP INDEX `REL_39771e8c4e736234efaaf69021` ON `course`");
      await queryRunner.query("DROP INDEX `IDX_30d559218724a6d6e0cc4f26b0` ON `course`");
      await queryRunner.query("DROP INDEX `IDX_5cf4963ae12285cda6432d5a3a` ON `course`");
      await queryRunner.query("DROP TABLE `course`");
      await queryRunner.query("DROP TABLE `course_meta`");
      await queryRunner.query("DROP INDEX `REL_ec03dddce46b4c14e25b70f9dc` ON `user`");
      await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
      await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`");
      await queryRunner.query("DROP TABLE `user`");
      await queryRunner.query("DROP TABLE `user_meta`");
    }
}
