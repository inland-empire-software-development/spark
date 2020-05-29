import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./version";


@Entity()
export class Notification extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  // TODO: Add many-to-one relation for messages-to-user
  @Column({type: 'int'})
  userId!: number;

  @Column()
  title!: string;

  @Column()
  message!: string;

  @Column({type: 'tinyint', default: 0})
  isRead!: number;

  @Column({type: 'tinyint', default: 0})
  typeId!: number;
}
