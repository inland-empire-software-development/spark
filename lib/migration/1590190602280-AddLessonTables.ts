import {MigrationInterface, QueryRunner} from "typeorm";

export class AddLessonTables1590190602280 implements MigrationInterface {
    name = 'AddLessonTables1590190602280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `lesson_meta` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT, `lessonDate` datetime NULL, `dueDate` datetime NULL, `description` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `lesson` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT, `code` varchar(45) NULL, `status` tinyint NOT NULL, `name` varchar(255) NOT NULL, `lessonMetaId` int UNSIGNED NULL, UNIQUE INDEX `IDX_0622d5d889bcbc142a90be1dfc` (`code`), UNIQUE INDEX `IDX_c60c736b10b5dafeb0923d5c1f` (`name`), UNIQUE INDEX `REL_ff3c95aaa00079d9ec5341343e` (`lessonMetaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_7acfebc1c4dab180b06c83c66b2`", undefined);
        await queryRunner.query("ALTER TABLE `user_meta` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_ec0b6388e3b40c292c8ae1d2f07`", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `userMetaId` `userMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_32e114cc1e4199c7de081e092a1`", undefined);
        await queryRunner.query("ALTER TABLE `course` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `userId` `userId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `courseId` `courseId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_7acfebc1c4dab180b06c83c66b2` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_ff3c95aaa00079d9ec5341343ee` FOREIGN KEY (`lessonMetaId`) REFERENCES `lesson_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_ec0b6388e3b40c292c8ae1d2f07` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_32e114cc1e4199c7de081e092a1` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_32e114cc1e4199c7de081e092a1`", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_ec0b6388e3b40c292c8ae1d2f07`", undefined);
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_ff3c95aaa00079d9ec5341343ee`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_7acfebc1c4dab180b06c83c66b2`", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `courseId` `courseId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `userId` `userId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_32e114cc1e4199c7de081e092a1` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `userMetaId` `userMetaId` int(10) UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_ec0b6388e3b40c292c8ae1d2f07` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_meta` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_7acfebc1c4dab180b06c83c66b2` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("DROP INDEX `REL_ff3c95aaa00079d9ec5341343e` ON `lesson`", undefined);
        await queryRunner.query("DROP INDEX `IDX_c60c736b10b5dafeb0923d5c1f` ON `lesson`", undefined);
        await queryRunner.query("DROP INDEX `IDX_0622d5d889bcbc142a90be1dfc` ON `lesson`", undefined);
        await queryRunner.query("DROP TABLE `lesson`", undefined);
        await queryRunner.query("DROP TABLE `lesson_meta`", undefined);
    }

}
