import connection from "../config/configDB";
import User from "../dto/UserDto";
import Auth from "../dto/AuthDto";
import Delivery from "../dto/DeliveryDto";
import updateStatus from "../dto/updateStatusDto";

class UserRepository{
    static async register(user: User){
        const sql = "insert into user (name, email, password) values (?,?,?)"
        const values = [user.getName(), user.getEmail(), user.getPassword()]
        return connection.execute(sql, values);
    }

   static async auth(auth: Auth){
        const sql = "select password, role from user where email = ?"
        const values = [auth.getEmail()]
        return connection.execute(sql, values)
    }
    

    static async getProducts(){
        const sql = 'select * from product'
        return await connection.execute(sql);
    }

    static async makeOrder(delivery: Delivery){
        const sql = "insert into delivery (address, status, FKId_Product, FKemail_User) values (?,?,?,?)"
        const values = [delivery.getAdress(), delivery.getStatus(), delivery.getIdProduct(), delivery.getEmail()]
        return await connection.execute(sql, values);
    }

    static async statusCheck(idProduct: number, email:string){
        const sql = "select status from delivery where FKId_Product= ? and FKemail_User = ? "
        const values = [idProduct, email]
        return await connection.execute(sql, values);
    }

    static async getOrdersUser(email:string){
        const sql = "SELECT * FROM history_Orders WHERE idUser = ?"
        console.log(email);
        
        const values = [email]
        return await connection.execute(sql, values);
    }

    static async updateStatus(status: updateStatus){
        const sql = "update delivery set status = ? where id = ?";
        const values = [status.getStatus(), status.getId()];
        return await connection.execute(sql, values);


    }
}

export default UserRepository;