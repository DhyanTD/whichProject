import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your_username", // Replace with your PostgreSQL username
  password: "your_password", // Replace with your PostgreSQL password
  database: "your_database", // Replace with your PostgreSQL database name
  synchronize: true,         // Set to false in production
  logging: true,
  entities: ["src/entity/**/*.ts"], // Path to your entities
  migrations: ["src/migration/**/*.ts"], // Path to your migrations
  subscribers: ["src/subscriber/**/*.ts"], // Path to your subscribers
});
