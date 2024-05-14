import UserService from "../../services/UserService";
import { Request, Response } from "express";

const getOrdersUser = async(req:Request, res: Response)=>{
    try {
        const email = req.body.email;
        const result = await UserService.getOrdersUser(email);

        return res.status(200).json(result[0])
    } catch (error: any) {
        return res.status(500).send({errorInfo: error.message})
    }    
}

export default getOrdersUser;