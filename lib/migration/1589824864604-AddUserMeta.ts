import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserMeta1589824864604 implements MigrationInterface {
    name = 'AddUserMeta1589824864604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `instructor` `userMeta` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `code`", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` ADD `code` varchar(45) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` ADD UNIQUE INDEX `IDX_6a06ef72401e32c8e4d65b258f` (`code`)", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `status`", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` ADD `status` tinyint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` ADD UNIQUE INDEX `IDX_a6a4c3c7858011a9061afec998` (`name`)", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `instructor`", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` ADD `instructor` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `userMeta`", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` ADD `userMeta` json NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `userMeta`", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` ADD `userMeta` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `instructor`", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` ADD `instructor` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` DROP INDEX `IDX_a6a4c3c7858011a9061afec998`", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `status`", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` ADD `status` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` DROP INDEX `IDX_6a06ef72401e32c8e4d65b258f`", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` DROP COLUMN `code`", undefined);
        await queryRunner.query("ALTER TABLE `course_demo` ADD `code` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `userMeta` `instructor` int NOT NULL", undefined);
    }

}
