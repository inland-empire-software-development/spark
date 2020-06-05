import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./DateCols";


@Entity()
export class Notification extends DateCols {
  @PrimaryGeneratedColumn()
  id!: number;

  // TODO: Add many-to-one relation for messages-to-user
  @Column({name: 'user_id', type: 'int'})
  userId!: number;

  @Column()
  title!: string;

  @Column()
  message!: string;

  @Column({name: 'is_read', type: 'tinyint', default: 0})
  isRead!: number;

  @Column({name: 'type_id', type: 'tinyint', default: 0})
  typeId!: number;
}
