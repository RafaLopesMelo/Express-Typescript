import express, { json } from 'express';
import usersController from './users/users.controller';

class App {
    public express: express.Application

    constructor() {
        this.express = express(); 

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(json());
    }

    routes() {
        this.express.use(usersController.router);
    }

    listen(port: number) {
        this.express.listen(port);
    }
}

export default new App();