import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

function EatTacos() {
  console.log("eat tacos");
}

EatTacos();

@Entity()
export class CourseDemo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  code!: string;

  @Column()
  name!: string;
}
