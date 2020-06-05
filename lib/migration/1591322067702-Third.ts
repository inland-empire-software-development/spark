import {MigrationInterface, QueryRunner} from "typeorm";

export class Third1591322067702 implements MigrationInterface {
    name = 'Third1591322067702'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `message` CHANGE `type` `type` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `message` CHANGE `type` `type` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'");
    }
}
