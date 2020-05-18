import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Version} from "./version";

@Entity()
export class CourseDemo extends Version {
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
}
