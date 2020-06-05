import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCoureMetaTypes1591331384024 implements MigrationInterface {
    name = 'AddCoureMetaTypes1591331384024'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_meta` ADD `cohort_id` int NULL");
      await queryRunner.query("ALTER TABLE `course_meta` ADD `course_start` datetime NOT NULL");
      await queryRunner.query("ALTER TABLE `course_meta` ADD `course_expire` datetime NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_meta` DROP COLUMN `course_expire`");
      await queryRunner.query("ALTER TABLE `course_meta` DROP COLUMN `course_start`");
      await queryRunner.query("ALTER TABLE `course_meta` DROP COLUMN `cohort_id`");
    }
}
