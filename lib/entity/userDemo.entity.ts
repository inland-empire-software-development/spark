import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserDemo {
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
