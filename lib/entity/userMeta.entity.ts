import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./DateCols";


@Entity()
export class UserMeta extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({nullable: true})
  firstName!: string;

  @Column({nullable: true})
  lastName!: string

  @Column({nullable: true})
  avatarUrl!: string;

  @Column({nullable: true})
  status!: string;

  @Column({nullable: true})
  website!: string;
}
