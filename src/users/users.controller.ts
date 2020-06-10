import { Router } from 'express';
import usersService from './users.service';

class UsersController {
    router = Router()

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/users', usersService.index)
        this.router.post('/users', usersService.create)
        this.router.put('/users/:id', usersService.update)
        this.router.delete('/users/:id', usersService.delete)
    }
}

export default new UsersController();