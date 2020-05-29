import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {DateCols} from "./DateCols";

@Entity()
export class Options extends DateCols {
  @PrimaryGeneratedColumn({unsigned: true})
  id!: number;

  @Column({name: 'meta_key', unique: true})
  metaKey!: string;

  @Column({name: 'meta_value', type: 'longtext'})
  metaValue!: string;

  @Column({type: 'tinyint', default: 0})
  autoload!: number;
}
