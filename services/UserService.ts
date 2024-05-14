import User from '../dto/UserDto';
import UserRepository from '../repositories/UserRepository';
import generateHash from '../helpers/generateHash';
import Auth from '../dto/AuthDto';
import compareHash from '../helpers/compareHash';
import generateToken from '../helpers/generateToken';
import Delivery from '../dto/DeliveryDto';
import updateStatus from '../dto/updateStatusDto';


class UserService{
    static async register(user: User){
        try {
            const password = await generateHash(user.getPassword());
            user.setPassword(password);
            const result = await UserRepository.register(user);
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    static async auth(auth: Auth){
        try {
            const result:any = await UserRepository.auth(auth);
            if (result && result[0].length > 0){
                const isPasswordValid = await compareHash(auth.getPassword(), result[0][0].password)

                if (isPasswordValid) {
                    const token = generateToken({email: auth.getEmail(), role: result[0][0].role}, process.env.SECRET, 30)
                    return token;
                }
            }
            return null;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    static async getProducts(){
        return await UserRepository.getProducts();
    }

    

    static async makeOrder(delivery:Delivery){
        return await UserRepository.makeOrder(delivery);
    }

    

    static async getOrdersUser(email: string){
        return await UserRepository.getOrdersUser(email);
    }

    static async updateStatus(status:updateStatus){
        if (status.getRole() === "Admin") {
            return await UserRepository.updateStatus(status);
        }
        throw new Error("Unauthorized");
    }

    static async statusCheck(id: number, email:string){
        return await UserRepository.statusCheck(id, email);
    }

}

export default UserService;