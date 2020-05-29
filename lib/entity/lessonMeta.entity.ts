import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./DateCols";

@Entity()
export class LessonMeta extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  // TODO - Determine properties for actual application
  @Column({name: 'lesson_date', nullable: true})
  lessonDate!: Date;

  @Column({name: 'due_date', nullable: true})
  dueDate!: Date

  @Column({nullable: true})
  description!: string;
}

