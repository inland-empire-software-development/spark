import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {DateCols} from "./version";
import {LessonMeta} from "./lessonMeta.entity";

@Entity()
export class Lesson extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({length: 45, unique: true, nullable: true})
  code!: string;

  @Column({type: "tinyint"})
  status!: number;

  @Column({unique: true})
  name!: string;

  @OneToOne(() => LessonMeta)
  @JoinColumn()
  lessonMeta!: LessonMeta
}
