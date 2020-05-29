import {MigrationInterface, QueryRunner} from "typeorm";

export class CourseMetaSnakeCase1590792011356 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('course_meta', 'heroImage', 'hero_image');
    await queryRunner.renameColumn('course_meta', 'userRanking', 'user_ranking');
    await queryRunner.renameColumn('course_meta', 'userComments', 'user_comments');
    await queryRunner.renameColumn('course_meta', 'cardImage', 'card_image');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('course_meta', 'hero_image', 'heroImage');
    await queryRunner.renameColumn('course_meta', 'user_ranking', 'userRanking');
    await queryRunner.renameColumn('course_meta', 'user_comments', 'userComments');
    await queryRunner.renameColumn('course_meta', 'card_image', 'cardImage');
  }
}
