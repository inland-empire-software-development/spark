import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne, JoinColumn} from "typeorm";
import {DateCols} from "./version";
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
  userMeta!: CourseMeta

  @ManyToMany(() => User, (user) => user.courses)
  users!: User[];
}
