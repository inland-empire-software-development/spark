import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {DateCols} from "./DateCols";
import {LessonMeta} from "./lessonMeta.entity";

@Entity()
export class Lesson extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({unique: true, nullable: true})
  code!: string;

  @Column({type: "tinyint"})
  status!: number;

  @Column({unique: true})
  name!: string;

  @OneToOne(() => LessonMeta)
  @JoinColumn({name: 'lesson_meta_id'})
  lessonMeta!: LessonMeta
}
