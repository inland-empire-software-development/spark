import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./DateCols";


@Entity()
export class UserMeta extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({name: 'first_name', nullable: true})
  firstName!: string;

  @Column({name: 'last_name', nullable: true})
  lastName!: string

  @Column({name: 'avatar_url', nullable: true})
  avatarUrl!: string;

  @Column({nullable: true})
  status!: string;

  @Column({nullable: true})
  website!: string;
}
