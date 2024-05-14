import UserService from "../../services/UserService";
import Delivery from "../../dto/DeliveryDto";
import { Request, Response } from "express";

const makeOrder = async(req: Request, res:Response)=>{
    try {
        const {email, idProduct, adress, status} = req.body;
        const result = await UserService.makeOrder(new Delivery(idProduct, email, status, adress))
        return res.status(201).json({
            status: 'Order placed'
        })
    } catch (error:any) {
        return res.status(500).send({errorInfo: error.message})
    }
}

export default makeOrder;