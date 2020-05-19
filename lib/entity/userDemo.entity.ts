import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import {DateCols} from "./version";
import {UserMetaDemo} from "./userMetaDemo.entity";
import {CourseDemo} from "./courseDemo.entity";


@Entity()
export class UserDemo extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true, comment: "Unique user ID to identify a single unique user"})
  id!: number;

  @Column({length: 35, unique: true, comment: "Username should be unique"})
  username!: string;

  @Column()
  password!: string;

  @Column({unique: true, length: 100})
  email!: string;

  // TODO - Create role types - use enum and maybe a user roles table for getting permissions
  @Column({length: 45})
  role!: string;

  @Column({length: 50})
  confirmation!: string;

  @Column({type: "tinyint"})
  passwordReset!: number;

  @Column({nullable: true})
  passwordToken!: string;

  @Column()
  lastLogin!: Date;

  @OneToOne(() => UserMetaDemo)
  @JoinColumn()
  userMeta!: UserMetaDemo

  @ManyToMany(() => CourseDemo, (course) => course.users)
  @JoinTable({name: "course_users_demo"})
  courses!: CourseDemo[];
}
