import {Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn} from "typeorm";

export abstract class Version {
  @Column("int")
  instructor!: number;

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn()
  deletedAt!: Date

  @VersionColumn()
  version!: number
}
