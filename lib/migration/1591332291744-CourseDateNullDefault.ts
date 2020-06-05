import {MigrationInterface, QueryRunner} from "typeorm";

export class CourseDateNullDefault1591332291744 implements MigrationInterface {
    name = 'CourseDateNullDefault1591332291744'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_start` `course_start` datetime NULL DEFAULT NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_expire` `course_expire` datetime NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_expire` `course_expire` datetime NOT NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_start` `course_start` datetime NOT NULL");
    }
}
