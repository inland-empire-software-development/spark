import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Version} from "./version";


@Entity()
export class UserMetaDemo extends Version {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string

  @Column()
  avatarUrl!: string;

  @Column()
  status!: string;

  @Column()
  website!: string;
}
