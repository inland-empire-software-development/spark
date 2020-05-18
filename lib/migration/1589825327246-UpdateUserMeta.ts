import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUserMeta1589825327246 implements MigrationInterface {
    name = 'UpdateUserMeta1589825327246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user_meta_demo` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `version` int NOT NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `avatarUrl` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, `website` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `userMeta`", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` ADD `userMeta` json NOT NULL", undefined);
        await queryRunner.query("DROP TABLE `user_meta_demo`", undefined);
    }

}
