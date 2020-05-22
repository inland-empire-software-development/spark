import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {DateCols} from "./version";
import {User} from "./user.entity";

@Entity()
export class Course extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({length: 45, unique: true})
  code!: string;

  @Column("tinyint")
  status!: number;

  @Column({unique: true})
  name!: string;

  @Column({length: 20})
  instructor!: string;

  @ManyToMany(() => User, (user) => user.courses)
  users!: User[];
}
