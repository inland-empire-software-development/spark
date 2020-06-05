import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateJoinTableColumnNames1591333010967 implements MigrationInterface {
    name = 'UpdateJoinTableColumnNames1591333010967'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE `course_users` (`course_id` int NOT NULL, `user_id` int NOT NULL, INDEX `IDX_eede1bfc8fc620f4d21a7855d5` (`course_id`), INDEX `IDX_f007e18d8424da235dd03a4e5d` (`user_id`), PRIMARY KEY (`course_id`, `user_id`)) ENGINE=InnoDB");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_start` `course_start` datetime NULL DEFAULT NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_expire` `course_expire` datetime NULL DEFAULT NULL");
      await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_eede1bfc8fc620f4d21a7855d5e` FOREIGN KEY (`course_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE `course_users` ADD CONSTRAINT `FK_f007e18d8424da235dd03a4e5d0` FOREIGN KEY (`user_id`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_f007e18d8424da235dd03a4e5d0`");
      await queryRunner.query("ALTER TABLE `course_users` DROP FOREIGN KEY `FK_eede1bfc8fc620f4d21a7855d5e`");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_expire` `course_expire` datetime NULL");
      await queryRunner.query("ALTER TABLE `course_meta` CHANGE `course_start` `course_start` datetime NULL");
      await queryRunner.query("DROP INDEX `IDX_f007e18d8424da235dd03a4e5d` ON `course_users`");
      await queryRunner.query("DROP INDEX `IDX_eede1bfc8fc620f4d21a7855d5` ON `course_users`");
      await queryRunner.query("DROP TABLE `course_users`");
    }
}
