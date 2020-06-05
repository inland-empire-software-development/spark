import {MigrationInterface, QueryRunner} from "typeorm";

export class AddLastLoginDefault1591384393262 implements MigrationInterface {
    name = 'AddLastLoginDefault1591384393262'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `user` CHANGE `password_token` `password_token` varchar(255) NULL DEFAULT NULL");
      await queryRunner.query("ALTER TABLE `user` CHANGE `last_login` `last_login` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_start` `course_start` datetime NULL DEFAULT NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_expire` `course_expire` datetime NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_expire` `course_expire` datetime NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_start` `course_start` datetime NULL");
      await queryRunner.query("ALTER TABLE `user` CHANGE `last_login` `last_login` datetime NOT NULL");
      await queryRunner.query("ALTER TABLE `user` CHANGE `password_token` `password_token` varchar(255) NULL");
    }
}
