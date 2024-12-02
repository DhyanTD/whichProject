import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./datasource";
import { UserController } from "./app/users/user.controller";

const app = express();
const port = 8080;

AppDataSource.initialize().then(() => {
  console.log("Database connected successfully!");


  new UserController(app);
}).catch((error)=>
{
  console.error("Error connecting to the database", error);
}
)