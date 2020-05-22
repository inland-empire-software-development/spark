import {MigrationInterface, QueryRunner} from "typeorm";

export class ResetMigrations1590186844624 implements MigrationInterface {
    name = 'ResetMigrations1590186844624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user_meta` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NULL, `lastName` varchar(255) NULL, `avatarUrl` varchar(255) NULL, `status` varchar(255) NULL, `website` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique user ID to identify a single unique user', `username` varchar(35) NOT NULL COMMENT 'Username should be unique', `password` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `role` varchar(45) NOT NULL, `confirmation` varchar(50) NOT NULL, `passwordReset` tinyint NOT NULL, `passwordToken` varchar(255) NULL, `lastLogin` datetime NOT NULL, `userMetaId` int UNSIGNED NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), UNIQUE INDEX `REL_7acfebc1c4dab180b06c83c66b` (`userMetaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `course` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `id` int UNSIGNED NOT NULL AUTO_INCREMENT, `code` varchar(45) NOT NULL, `status` tinyint NOT NULL, `name` varchar(255) NOT NULL, `instructor` varchar(20) NOT NULL, UNIQUE INDEX `IDX_5cf4963ae12285cda6432d5a3a` (`code`), UNIQUE INDEX `IDX_30d559218724a6d6e0cc4f26b0` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `course_users` (`userId` int UNSIGNED NOT NULL, `courseId` int UNSIGNED NOT NULL, INDEX `IDX_ec0b6388e3b40c292c8ae1d2f0` (`userId`), INDEX `IDX_32e114cc1e4199c7de081e092a` (`courseId`), PRIMARY KEY (`userId`, `courseId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_7acfebc1c4dab180b06c83c66b2` FOREIGN KEY (`userMetaId`) REFERENCES `user_meta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_ec0b6388e3b40c292c8ae1d2f07` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_32e114cc1e4199c7de081e092a1` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_32e114cc1e4199c7de081e092a1`", undefined);
        await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_ec0b6388e3b40c292c8ae1d2f07`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_7acfebc1c4dab180b06c83c66b2`", undefined);
        await queryRunner.query("DROP INDEX `IDX_32e114cc1e4199c7de081e092a` ON `course_users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_ec0b6388e3b40c292c8ae1d2f0` ON `course_users`", undefined);
        await queryRunner.query("DROP TABLE `course_users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_30d559218724a6d6e0cc4f26b0` ON `course`", undefined);
        await queryRunner.query("DROP INDEX `IDX_5cf4963ae12285cda6432d5a3a` ON `course`", undefined);
        await queryRunner.query("DROP TABLE `course`", undefined);
        await queryRunner.query("DROP INDEX `REL_7acfebc1c4dab180b06c83c66b` ON `user`", undefined);
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`", undefined);
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
        await queryRunner.query("DROP TABLE `user_meta`", undefined);
    }

}
