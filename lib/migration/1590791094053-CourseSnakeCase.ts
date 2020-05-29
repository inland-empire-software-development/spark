import {MigrationInterface, QueryRunner} from "typeorm";

export class CourseSnakeCase1590791094053 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('course', 'courseMetaId', 'course_meta_id');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('course', 'course_meta_id', 'courseMetaId');
  }
}
