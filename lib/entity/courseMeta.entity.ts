import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./DateCols";

@Entity()
export class CourseMeta extends DateCols {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'hero_image', nullable: true})
  heroImage!: string;

  @Column({nullable: true})
  status!: string;

  @Column({name: 'user_ranking', nullable: true})
  userRanking!: string;

  @Column({name: 'user_comments', nullable: true})
  userComments!: string;

  @Column({nullable: true})
  description!: string;

  @Column({nullable: true})
  resources!: string;

  @Column({name: 'card_image', nullable: true})
  cardImage!: string;

  // TODO: connect/relate to a cohort entity
  @Column({name: 'cohort_id', nullable: true, type: 'integer'})
  cohortID!: number;

  @Column({name: 'course_start'})
  courseStart!: Date;

  @Column({name: 'course_expire'})
  courseExpire!: Date;
}
