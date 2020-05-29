import {MigrationInterface, QueryRunner} from "typeorm";

export class MessageSnakeCase1590789877373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('message', 'senderId', 'sender_id');
    await queryRunner.renameColumn('message', 'recipientId', 'recipient_id');
    await queryRunner.renameColumn('message', 'isRead', 'is_read');
    await queryRunner.renameColumn('message', 'expiryDate', 'expiry_date');
    await queryRunner.renameColumn('message', 'recipientGroup', 'recipient_group');
    await queryRunner.renameColumn('message', 'nextRemindDate', 'next_remind_date');
    await queryRunner.renameColumn('message', 'reminderFrequencyId', 'reminder_frequency_id');
    await queryRunner.renameColumn('message', 'removalDate', 'removal_date');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.renameColumn('message', 'sender_id', 'senderId');
    await queryRunner.renameColumn('message', 'recipient_id', 'recipientId');
    await queryRunner.renameColumn('message', 'is_read', 'isRead');
    await queryRunner.renameColumn('message', 'expiry_date', 'expiryDate');
    await queryRunner.renameColumn('message', 'recipient_group', 'recipientGroup');
    await queryRunner.renameColumn('message', 'next_remind_date', 'nextRemindDate');
    await queryRunner.renameColumn('message', 'reminder_frequency_id', 'reminderFrequencyId');
    await queryRunner.renameColumn('message', 'removal_date', 'removalDate');
  }
}
