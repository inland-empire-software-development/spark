import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./DateCols";

@Entity()
export class Message extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  timestamp!: Date;

  // TODO: Relation to user
  @Column({name: 'sender_id', type: 'int'})
  senderId!: number;

  // TODO: Relation to user
  @Column({name: 'recipient_id', type: 'int'})
  recipientId!: number;

  @Column()
  body!: string;

  @Column({name: 'is_read', nullable: true, type: 'tinyint', default: 0})
  isRead!: number;

  @Column({name: 'expiry_date', nullable: true})
  expiryDate!: Date;

  @Column({name: 'recipient_group', nullable: true, type: 'longtext'})
  recipientGroup!: string;

  @Column({name: 'is_reminder', nullable: true, type: 'tinyint', default: 0})
  isReminder!: number;

  @Column({name: 'next_remind_date', nullable: true})
  nextRemindDate!: Date;

  @Column({name: 'reminder_frequency_id', nullable: true, type: 'int'})
  reminderFrequencyId!: number;

  @Column({nullable: true, type: 'tinyint', default: 0})
  ephemeral!: number;

  @Column({name: 'removal_date', nullable: true})
  removalDate!: Date;

  @Column({type: 'tinyint', unsigned: true, default: 0})
  type!: number;
}
