import {CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn} from "typeorm";

export abstract class Version {
  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn()
  deletedAt!: Date

  @VersionColumn()
  version!: number
}
