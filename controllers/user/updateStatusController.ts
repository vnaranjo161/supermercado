import { Request, Response } from 'express'
import UserService from '../../services/UserService';
import User from '../../dto/UserDto';
import UpdateStatus from '../../dto/updateStatusDto';

const updateStatus = async(req: Request, res:Response)=>{
    try {
        const {idOrder,role,status} = req.body;

       await UserService.updateStatus(new UpdateStatus(idOrder,status,role));

        return res.status(201).json({
            status: "successful update "
        })
    } catch (error:any) {
        return res.status(500).send({errorInfo: error.message})
    }
}

export default updateStatus;