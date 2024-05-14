import { Request, Response } from 'express'
import UserService from '../../services/UserService';
import User from '../../dto/UserDto';

const register = async(req: Request, res:Response)=>{
    try {
        const {password, email, name} = req.body;
        const result = await UserService.register(new User(name, email, password))

        return res.status(201).json({
            status: "Register ok"
        })
    } catch (error:any) {
        return res.status(500).send({errorInfo: error.message})
    }
}

export default register;