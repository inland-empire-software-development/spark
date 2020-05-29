import {MigrationInterface, QueryRunner} from "typeorm";

export class OptionsTable1590794833194 implements MigrationInterface {
    name = 'OptionsTable1590794833194'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE `options` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` datetime(6) NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT, `meta_key` varchar(255) NOT NULL, `meta_value` longtext NOT NULL, `autoload` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX `IDX_3fca302083ab190935681f7e40` (`meta_key`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("DROP INDEX `IDX_3fca302083ab190935681f7e40` ON `options`", undefined);
      await queryRunner.query("DROP TABLE `options`", undefined);
    }
}
