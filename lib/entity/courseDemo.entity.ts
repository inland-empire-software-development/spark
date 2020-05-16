import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class CourseDemo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  code!: string;

  @Column()
  status!: number;

  @Column()
  name!: string;

  @Column("int")
  instructor!: number;
}
