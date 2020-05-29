import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./version";

@Entity()
export class Message extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  timestamp!: Date;

  @Column({type: 'int'})
  senderId!: number;

  @Column({type: 'int'})
  recipientId!: number;

  @Column()
  body!: string;

  @Column({nullable: true, type: 'tinyint', default: () => 0})
  isRead!: number;

  @Column({nullable: true})
  expiryDate!: Date;

  @Column({nullable: true, type: 'longtext'})
  recipientGroup!: string;

  @Column({nullable: true, type: 'tinyint', default: () => 0})
  isReminder!: number;

  @Column({nullable: true})
  nextRemindDate!: Date;

  @Column({nullable: true, type: 'int'})
  reminderFrequencyId!: number;

  @Column({nullable: true, type: 'tinyint', default: () => 0})
  ephemeral!: number;

  @Column({nullable: true})
  removalDate!: Date;

  @Column({type: 'tinyint', unsigned: true, default: () => 0})
  type!: number;
}
