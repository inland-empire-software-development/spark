import {Version} from "./version.entity";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class CourseDemo extends Version {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  code!: string;

  @Column()
  status!: number;

  @Column()
  name!: string;
}
