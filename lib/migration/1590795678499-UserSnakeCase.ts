import {MigrationInterface, QueryRunner} from "typeorm";

export class UserSnakeCase1590795678499 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('user', 'passwordReset', 'password_reset');
    await queryRunner.renameColumn('user', 'passwordToken', 'password_token');
    await queryRunner.renameColumn('user', 'lastLogin', 'last_login');
    await queryRunner.renameColumn('user', 'userMetaId', 'user_meta_id');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('user', 'password_reset', 'passwordReset');
    await queryRunner.renameColumn('user', 'password_token', 'passwordToken');
    await queryRunner.renameColumn('user', 'last_login', 'lastLogin');
    await queryRunner.renameColumn('user', 'user_meta_id', 'userMetaId');
  }
}
