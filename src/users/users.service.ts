import { Request, Response } from 'express'
import connection from '../database/connection';

class UsersService {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await connection('users').select('*');
        return res.json(users)
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const {
            username,
            password,
            email
        } = req.body
        const [id] = await connection('users').insert({
            username,
            password,
            email
        });
        return res.json({id})
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const id = req.params
        const {
            username,
            password,
            email
        } = req.body

        await connection('users').where(id).first().update({
            username,
            password,
            email
        })

        return res.json({ ...id, username, password, email })
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const id = req.params
        await connection('users').where(id).delete()
        return res.sendStatus(204)
    }
}

export default new UsersService();