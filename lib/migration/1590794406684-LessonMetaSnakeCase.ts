import {MigrationInterface, QueryRunner} from "typeorm";

export class LessonMetaSnakeCase1590794406684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('lesson_meta', 'lessonDate', 'lesson_date');
    await queryRunner.renameColumn('lesson_meta', 'dueDate', 'due_date');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('lesson_meta', 'lesson_date', 'lessonDate');
    await queryRunner.renameColumn('lesson_meta', 'due_date', 'dueDate');
  }
}
