import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres", 
  password: "mysecretpassword", 
  database: "whichproject", 
  synchronize: true,        
  logging: true,
  entities: ["src/app/**/**/*.entity.ts"],
  migrations: ["src/migration/**/*.ts"], 
  subscribers: ["src/subscriber/**/*.ts"], 
});
