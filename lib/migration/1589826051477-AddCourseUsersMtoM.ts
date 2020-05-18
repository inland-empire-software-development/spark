import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCourseUsersMtoM1589826051477 implements MigrationInterface {
    name = 'AddCourseUsersMtoM1589826051477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_0768215971c9d6f9b57db33c69` ON `user_demo`", undefined);
        await queryRunner.query("CREATE TABLE `course_users_demo` (`userDemoId` int UNSIGNED NOT NULL, `courseDemoId` int NOT NULL, INDEX `IDX_ee69a306960e3d3029f4a8f281` (`userDemoId`), INDEX `IDX_dc96ebb4f08a86810fd02caf1a` (`courseDemoId`), PRIMARY KEY (`userDemoId`, `courseDemoId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` DROP FOREIGN KEY `FK_0768215971c9d6f9b57db33c693`", undefined);
        await queryRunner.query("ALTER TABLE `user_meta_demo` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `userMetaId` `userMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` ADD CONSTRAINT `FK_0768215971c9d6f9b57db33c693` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta_demo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users_demo` ADD CONSTRAINT `FK_ee69a306960e3d3029f4a8f2810` FOREIGN KEY (`userDemoId`) REFERENCES `user_demo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users_demo` ADD CONSTRAINT `FK_dc96ebb4f08a86810fd02caf1ad` FOREIGN KEY (`courseDemoId`) REFERENCES `course_demo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `course_users_demo` DROP FOREIGN KEY `FK_dc96ebb4f08a86810fd02caf1ad`", undefined);
        await queryRunner.query("ALTER TABLE `course_users_demo` DROP FOREIGN KEY `FK_ee69a306960e3d3029f4a8f2810`", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` DROP FOREIGN KEY `FK_0768215971c9d6f9b57db33c693`", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `userMetaId` `userMetaId` int(10) UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `user_meta_demo` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user_demo` ADD CONSTRAINT `FK_0768215971c9d6f9b57db33c693` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta_demo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("DROP INDEX `IDX_dc96ebb4f08a86810fd02caf1a` ON `course_users_demo`", undefined);
        await queryRunner.query("DROP INDEX `IDX_ee69a306960e3d3029f4a8f281` ON `course_users_demo`", undefined);
        await queryRunner.query("DROP TABLE `course_users_demo`", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_0768215971c9d6f9b57db33c69` ON `user_demo` (`userMetaId`)", undefined);
    }

}
