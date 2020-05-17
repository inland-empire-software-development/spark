import {MigrationInterface, QueryRunner} from "typeorm";

export class TestMigration1589686986683 implements MigrationInterface {
    name = 'TestMigration1589686986683'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE `user_demo` (`instructor` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, `id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `role` varchar(255) NOT NULL, `confirmation` varchar(255) NOT NULL, `passwordReset` tinyint NOT NULL, `passwordToken` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
      await queryRunner.query("ALTER TABLE `course_demo` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
      await queryRunner.query("ALTER TABLE `course_demo` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
      await queryRunner.query("ALTER TABLE `course_demo` ADD `deletedAt` datetime(6) NULL", undefined);
      await queryRunner.query("ALTER TABLE `course_demo` ADD `version` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `version`", undefined);
      await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `deletedAt`", undefined);
      await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `updatedAt`", undefined);
      await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `createdAt`", undefined);
      await queryRunner.query("DROP TABLE `user_demo`", undefined);
    }
}
