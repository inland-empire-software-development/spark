import {MigrationInterface, QueryRunner} from "typeorm";

export class Second1591321745824 implements MigrationInterface {
    name = 'Second1591321745824'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `message` CHANGE `type` `type` tinyint UNSIGNED NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `message` CHANGE `type` `type` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'");
    }
}
