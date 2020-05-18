import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserMetaRelation1589825729990 implements MigrationInterface {
    name = 'AddUserMetaRelation1589825729990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_demo` ADD `userMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` ADD UNIQUE INDEX `IDX_0768215971c9d6f9b57db33c69` (`userMetaId`)", undefined);
        await queryRunner.query("ALTER TABLE `user_meta_demo` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_0768215971c9d6f9b57db33c69` ON `user_demo` (`userMetaId`)", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` ADD CONSTRAINT `FK_0768215971c9d6f9b57db33c693` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta_demo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_demo` DROP FOREIGN KEY `FK_0768215971c9d6f9b57db33c693`", undefined);
        await queryRunner.query("DROP INDEX `REL_0768215971c9d6f9b57db33c69` ON `user_demo`", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `user_meta_demo` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` DROP INDEX `IDX_0768215971c9d6f9b57db33c69`", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` DROP COLUMN `userMetaId`", undefined);
    }

}
