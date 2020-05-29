import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNotification1590779557433 implements MigrationInterface {
    name = 'AddNotification1590779557433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `notification` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT, `userId` int NOT NULL, `title` varchar(255) NOT NULL, `message` varchar(255) NOT NULL, `isRead` tinyint NOT NULL DEFAULT 0, `typeId` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_7acfebc1c4dab180b06c83c66b2`", undefined);
        await queryRunner.query("ALTER TABLE `user_meta` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_ec0b6388e3b40c292c8ae1d2f07`", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `userMetaId` `userMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `course` DROP FOREIGN KEY `FK_3a03a080ce47c9968957da33f08`", undefined);
        await queryRunner.query("ALTER TABLE `course_meta` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_32e114cc1e4199c7de081e092a1`", undefined);
        await queryRunner.query("ALTER TABLE `course` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course` CHANGE `courseMetaId` `courseMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_ff3c95aaa00079d9ec5341343ee`", undefined);
        await queryRunner.query("ALTER TABLE `lesson_meta` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `lessonMetaId` `lessonMetaId` int UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `message` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `message` CHANGE `type` `type` tinyint UNSIGNED NOT NULL DEFAULT 0", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `userId` `userId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `courseId` `courseId` int UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_7acfebc1c4dab180b06c83c66b2` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course` ADD CONSTRAINT `FK_3a03a080ce47c9968957da33f08` FOREIGN KEY (`courseMetaId`) REFERENCES `course_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_ff3c95aaa00079d9ec5341343ee` FOREIGN KEY (`lessonMetaId`) REFERENCES `lesson_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_ec0b6388e3b40c292c8ae1d2f07` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_32e114cc1e4199c7de081e092a1` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_32e114cc1e4199c7de081e092a1`", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_ec0b6388e3b40c292c8ae1d2f07`", undefined);
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_ff3c95aaa00079d9ec5341343ee`", undefined);
        await queryRunner.query("ALTER TABLE `course` DROP FOREIGN KEY `FK_3a03a080ce47c9968957da33f08`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_7acfebc1c4dab180b06c83c66b2`", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `courseId` `courseId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `course_users` CHANGE `userId` `userId` int(10) UNSIGNED NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `message` CHANGE `type` `type` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'", undefined);
        await queryRunner.query("ALTER TABLE `message` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `lessonMetaId` `lessonMetaId` int(10) UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson_meta` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_ff3c95aaa00079d9ec5341343ee` FOREIGN KEY (`lessonMetaId`) REFERENCES `lesson_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course` CHANGE `courseMetaId` `courseMetaId` int(10) UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `course` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_32e114cc1e4199c7de081e092a1` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_meta` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `course` ADD CONSTRAINT `FK_3a03a080ce47c9968957da33f08` FOREIGN KEY (`courseMetaId`) REFERENCES `course_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `userMetaId` `userMetaId` int(10) UNSIGNED NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user'", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_ec0b6388e3b40c292c8ae1d2f07` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `user_meta` CHANGE `id` `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_7acfebc1c4dab180b06c83c66b2` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("DROP TABLE `notification`", undefined);
    }

}
