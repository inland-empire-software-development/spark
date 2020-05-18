import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUserDemo1589822560771 implements MigrationInterface {
    name = 'UpdateUserDemo1589822560771'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `username`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD `username` varchar(35) NOT NULL COMMENT 'Username should be unique'", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD UNIQUE INDEX `IDX_db5f5077ee0d7ca5696c3018e0` (`username`)", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `email`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD `email` varchar(100) NOT NULL", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD UNIQUE INDEX `IDX_bf9699af1fa731ad2bd58d3d48` (`email`)", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `role`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD `role` varchar(45) NOT NULL", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `confirmation`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD `confirmation` varchar(50) NOT NULL", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` CHANGE `passwordToken` `passwordToken` varchar(255) NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `user_demo` CHANGE `passwordToken` `passwordToken` varchar(255) NOT NULL", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `confirmation`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD `confirmation` varchar(255) NOT NULL", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `role`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD `role` varchar(255) NOT NULL", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP INDEX `IDX_bf9699af1fa731ad2bd58d3d48`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `email`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD `email` varchar(255) NOT NULL", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP INDEX `IDX_db5f5077ee0d7ca5696c3018e0`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `username`", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` ADD `username` varchar(255) NOT NULL", undefined);
      await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT", undefined);
    }
}
