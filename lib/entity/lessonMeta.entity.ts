import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./version";

@Entity()
export class LessonMeta extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  // TODO - Determine properties for actual application
  @Column({nullable: true})
  lessonDate!: Date;

  @Column({nullable: true})
  dueDate!: Date

  @Column({nullable: true})
  description!: string;
}

