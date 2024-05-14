import { Request, Response } from "express";
import UserService from "../../services/UserService";

const statusCheck=  async(req:Request, res:Response)=>{
    try {
        const {idProduct, email} = req.body;
        const result: any = await UserService.statusCheck(idProduct, email);

        return res.status(200).json({
            status: result[0][0].status
        })

    } catch (error:any) {
        return res.status(500).send({errorInfo: error.message})
    }    
}

export default statusCheck;