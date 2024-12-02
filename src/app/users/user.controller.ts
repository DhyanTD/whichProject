import type { Application } from "express";
import type { User } from "./user.entity";


export class UserController{
    path : string = '/users';
    private app: Application
    constructor(app: Application){
        this.app = app
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.app.get(`${this.path}`, this.getUsers.bind(this))
    }


    private async getUsers(){
        // const users = await User.find()
        // return users
    }
}