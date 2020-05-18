import {CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

export abstract class DateCols {
  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn()
  deletedAt!: Date
}
