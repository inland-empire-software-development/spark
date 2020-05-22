import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./version";

@Entity()
export class CourseMeta extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({nullable: true})
  heroImage!: string;

  @Column({nullable: true})
  status!: string;

  @Column({nullable: true})
  userRanking!: string;

  @Column({nullable: true})
  userComments!: string;

  @Column({nullable: true})
  description!: string;

  @Column({nullable: true})
  resources!: string;

  @Column({nullable: true})
  cardImage!: string;
}
