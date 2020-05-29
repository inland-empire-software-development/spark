import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import {DateCols} from "./DateCols";
import {UserMeta} from "./userMeta.entity";
import {Course} from "./course.entity";


@Entity()
export class User extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true, comment: "Unique user ID to identify a single unique user"})
  id!: number;

  @Column({length: 35, unique: true, comment: "Username should be unique"})
  username!: string;

  @Column()
  password!: string;

  @Column({unique: true})
  email!: string;

  // TODO - Create role types - use enum and maybe a user roles table for getting permissions
  @Column({length: 45})
  role!: string;

  @Column({length: 50})
  confirmation!: string;

  @Column({name: "password_reset", type: "tinyint"})
  passwordReset!: number;

  @Column({name: "password_token", nullable: true})
  passwordToken!: string;

  @Column({name: "last_login"})
  lastLogin!: Date;

  @OneToOne(() => UserMeta)
  @JoinColumn({name: 'user_meta_id'})
  userMeta!: UserMeta

  @ManyToMany(() => Course, (course) => course.users)
  @JoinTable({name: "course_users"})
  courses!: Course[];
}
