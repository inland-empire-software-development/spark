import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import {DateCols} from "./DateCols";
import {UserMeta} from "./userMeta.entity";
import {Course} from "./course.entity";


@Entity()
export class User extends DateCols {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({unique: true, comment: "Username should be unique"})
  username!: string;

  @Column()
  password!: string;

  @Column({unique: true})
  email!: string;

  // TODO - Create role types - use enum and maybe a user roles table for getting permissions
  @Column()
  role!: string;

  @Column()
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
