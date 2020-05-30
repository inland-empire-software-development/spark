import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMetaSnakeCase1590796628892 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('user_meta', 'firstName', 'first_name');
    await queryRunner.renameColumn('user_meta', 'lastName', 'last_name');
    await queryRunner.renameColumn('user_meta', 'avatarUrl', 'avatar_url');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('user_meta', 'first_name', 'firstName');
    await queryRunner.renameColumn('user_meta', 'last_name', 'lastName');
    await queryRunner.renameColumn('user_meta', 'avatar_url', 'avatarUrl');
  }
}
