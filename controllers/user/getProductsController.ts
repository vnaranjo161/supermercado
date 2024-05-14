import { Request, Response } from "express";
import UserService from "../../services/UserService";

const getProducts = async(req: Request, res: Response)=>{
    try {
        const result =  await UserService.getProducts();
        return res.status(200).json(result[0])
    } catch (error: any) {
        return res.status(500).json({errorInfo: error.message })
    }

}

export default getProducts;