import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserTokenDefaults1591384154563 implements MigrationInterface {
    name = 'AddUserTokenDefaults1591384154563'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `user` CHANGE `password_reset` `password_reset` tinyint NOT NULL DEFAULT 0");
      await queryRunner.query("ALTER TABLE `user` CHANGE `password_token` `password_token` varchar(255) NULL DEFAULT NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_start` `course_start` datetime NULL DEFAULT NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_expire` `course_expire` datetime NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_expire` `course_expire` datetime NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_start` `course_start` datetime NULL");
      await queryRunner.query("ALTER TABLE `user` CHANGE `password_token` `password_token` varchar(255) NULL");
      await queryRunner.query("ALTER TABLE `user` CHANGE `password_reset` `password_reset` tinyint NOT NULL");
    }
}
