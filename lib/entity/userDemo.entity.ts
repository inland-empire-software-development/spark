import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Version} from "./version.entity";

@Entity()
export class UserDemo extends Version {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  // TODO - some sort of enum
  @Column()
  role!: string;

  @Column()
  confirmation!: string;

  @Column("tinyint")
  passwordReset!: number;

  @Column()
  passwordToken!: string;
}
