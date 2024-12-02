import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type { IUser } from "./IUser";

@Entity({ name: "users" })
export class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "name", type: "varchar" })
  name!: string;

  @Column({ name: "email", type: "varchar", unique: true })
  email!: string;

  @Column({ name: "password", type: "varchar" })
  password!: string;

  @Column({ name: "created_at", type: "timestamp", default: () => "now()" })
  createdAt!: Date;

  @Column({ name: "updated_at", type: "timestamp", default: () => "now()" })
  updatedAt!: Date;

  constructor(it?: IUser) {
    if (it) {
      this.name = it.name;
      this.email = it.email;
      this.password = it.password;
      if (it.id) this.id = it.id;
    }
  }
}
