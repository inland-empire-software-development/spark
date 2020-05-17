import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Version} from "./version";

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
