import {MigrationInterface, QueryRunner} from "typeorm";

export class LessonSnakeCase1590794054512 implements MigrationInterface {
    name = 'LessonSnakeCase1590794054512'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.renameColumn('lesson', 'lessonMetaId', 'lesson_meta_id');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.renameColumn('lesson', 'lesson_meta_id', 'lessonMetaId');
    }
}
