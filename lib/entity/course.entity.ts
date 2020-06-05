import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne, JoinColumn} from "typeorm";
import {DateCols} from "./DateCols";
import {User} from "./user.entity";
import {CourseMeta} from "./courseMeta.entity";

@Entity()
export class Course extends DateCols {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({unique: true})
  code!: string;

  @Column("tinyint")
  status!: number;

  @Column({unique: true})
  name!: string;

  @Column()
  instructor!: string;

  @OneToOne(() => CourseMeta)
  @JoinColumn({name: 'course_meta_id'})
  courseMeta!: CourseMeta

  @ManyToMany(() => User, (user) => user.courses)
  users!: User[];
}
