import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {DateCols} from "./version";
import {UserDemo} from "./userDemo.entity";

@Entity()
export class CourseDemo extends DateCols {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({length: 45, unique: true})
  code!: string;

  @Column("tinyint")
  status!: number;

  @Column({unique: true})
  name!: string;

  @Column({length: 20})
  instructor!: string;

  @ManyToMany(() => UserDemo, (user) => user.courses)
  users!: UserDemo[];
}
