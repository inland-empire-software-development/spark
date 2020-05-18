import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./version";


@Entity()
export class UserMetaDemo extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string

  @Column()
  avatarUrl!: string;

  @Column()
  status!: string;

  @Column()
  website!: string;
}
