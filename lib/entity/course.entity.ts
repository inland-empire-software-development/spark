import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne, JoinColumn} from "typeorm";
import {DateCols} from "./DateCols";
import {User} from "./user.entity";
import {CourseMeta} from "./courseMeta.entity";

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

  @OneToOne(() => CourseMeta)
  @JoinColumn()
  courseMeta!: CourseMeta

  @ManyToMany(() => User, (user) => user.courses)
  users!: User[];
}
