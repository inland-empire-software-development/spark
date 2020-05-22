import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCourseMeta1590190986354 implements MigrationInterface {
    name = 'AddCourseMeta1590190986354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `course_meta` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT, `heroImage` varchar(255) NULL, `status` varchar(255) NULL, `userRanking` varchar(255) NULL, `userComments` varchar(255) NULL, `description` varchar(255) NULL, `resources` varchar(255) NULL, `cardImage` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `course` ADD `userMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `course` ADD UNIQUE INDEX `IDX_6b21492a6f94b846ae2a2c6214` (`userMetaId`)", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_7acfebc1c4dab180b06c83c66b2`", undefined);
        await queryRunner.query("ALTER TABLE `user_meta` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_ec0b6388e3b40c292c8ae1d2f07`", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `userMetaId` `userMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_32e114cc1e4199c7de081e092a1`", undefined);
        await queryRunner.query("ALTER TABLE `course` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_ff3c95aaa00079d9ec5341343ee`", undefined);
        await queryRunner.query("ALTER TABLE `lesson_meta` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `lessonMetaId` `lessonMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `userId` `userId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `courseId` `courseId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_6b21492a6f94b846ae2a2c6214` ON `course` (`userMetaId`)", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_7acfebc1c4dab180b06c83c66b2` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course` ADD CONSTRAINT `FK_6b21492a6f94b846ae2a2c6214e` FOREIGN KEY (`userMetaId`) REFERENCES `course_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_ff3c95aaa00079d9ec5341343ee` FOREIGN KEY (`lessonMetaId`) REFERENCES `lesson_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_ec0b6388e3b40c292c8ae1d2f07` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_32e114cc1e4199c7de081e092a1` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_32e114cc1e4199c7de081e092a1`", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_ec0b6388e3b40c292c8ae1d2f07`", undefined);
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_ff3c95aaa00079d9ec5341343ee`", undefined);
        await queryRunner.query("ALTER TABLE `course` DROP FOREIGN KEY `FK_6b21492a6f94b846ae2a2c6214e`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_7acfebc1c4dab180b06c83c66b2`", undefined);
        await queryRunner.query("DROP INDEX `REL_6b21492a6f94b846ae2a2c6214` ON `course`", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `courseId` `courseId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `userId` `userId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `lessonMetaId` `lessonMetaId` int(10) UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson_meta` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_ff3c95aaa00079d9ec5341343ee` FOREIGN KEY (`lessonMetaId`) REFERENCES `lesson_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_32e114cc1e4199c7de081e092a1` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `userMetaId` `userMetaId` int(10) UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_ec0b6388e3b40c292c8ae1d2f07` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_meta` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_7acfebc1c4dab180b06c83c66b2` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course` DROP INDEX `IDX_6b21492a6f94b846ae2a2c6214`", undefined);
        await queryRunner.query("ALTER TABLE `course` DROP COLUMN `userMetaId`", undefined);
        await queryRunner.query("DROP TABLE `course_meta`", undefined);
    }

}
