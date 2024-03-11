import { sqlConnect as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";

class Users{
    fetchUsers(req, res){
        const qry = `SELECT userID, firstName, lastName, userAge, gender, emailAdd, userRole
                    FROM Users`
        db.query(qry,(err, results)=>{
            if(err)throw err
            res.json({status: res.statusCode, results})
        })
    }
    fetchUser(req, res){
        const qry = `SELECT userID, firstName, lastName, userAge, gender, emailAdd, userRole
                    FROM Users
                    WHERE userID = ${req.params.id}`
    
        db.query(qry,(err, results)=>{
            if(err)throw err
            res.json({status: res.statusCode, results})
        })
    }
    async createUser(req, res){
        let data = req.body
        data.userPwd = await hash(data?.userPwd,10)
        let user = {
            emailAdd: data.emailAdd,
            userPwd: data.userPwd
        }
        const qry = `INSERT INTO Users SET? ;`

        db.query(qry, [data], (err)=>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: 'This email address already exists'
                })
            }else {
                // Create token
                let token = createToken(user)
                res.json({
                    status: res.statusCode,token,
                    msg: "You're registered successfully"
                })
            }
        })
    }
    async deleteUser(req,res){
        let data = req.body
        const qry = `DELETE FROM Users WHERE userID =${req.params.id}`
        db.query(qry,[data],(err)=>{
            if(err) throw err
            res.json({status: res.statusCode,msg:"User deleted successfully"})
        })
    }
    async alterUser(req,res){
        let data = req.body
        const qry = `UPDATE Users SET? WHERE userID =${req.params.id}`
        db.query(qry,[data],(err)=>{
            if(err) throw err
            res.json({status: res.statusCode,msg:"User updated successfully"})
        })
    }
    login(req, res) {
        const {emailAdd, userPwd} = req.body 
        const qry = `
        SELECT userID, firstName, lastName, 
        userAge, gender, emailAdd, userPwd, userRole
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(qry, async(err, result)=>{
            if(err) throw err 
            if(!result?.length){
                res.json({
                    status: res.statusCode, 
                    msg: "You provided a wrong email address."
                })
            }else {
                const validPass = await compare(userPwd, result[0].userPwd)
                if(validPass) {
                    const token = createToken({emailAdd,userPwd})
                    res.json({
                        status: res.statusCode,
                        msg: "You're logged in",
                        token, 
                        result: result[0]
                    })
                }else {
                    res.json({
                        status: res.statusCode,
                        msg: "Please provide the correct password."
                    })
                }
            }
        })
    }
    async fetchCartItems(req, res) {
        const qry = `SELECT * FROM Cart`;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({ status: res.statusCode, results });
        });
    }

    async addToCart(req, res) {
        const { userID, prodID, prodQuantity } = req.body;
        const qry = `INSERT INTO Cart (userID, prodID, prodQuantity) VALUES (?, ?, ?)`;
        db.query(qry, [userID, prodID, prodQuantity], (err) => {
            if (err) throw err;
            res.json({ status: res.statusCode, message: 'Item added to cart' });
        });
    }

    async removeFromCart(req, res) {
        const { cartItemId } = req.params;
        const qry = `DELETE FROM Cart WHERE CartItemId = ?`;
        db.query(qry, [cartItemId], (err) => {
            if (err) throw err;
            res.json({ status: res.statusCode, message: 'Item removed from cart' });
        });
    }

    async updateCartItemQuantity(req, res) {
        const { cartItemId } = req.params;
        const { prodQuantity } = req.body;
        const qry = `UPDATE Cart SET prodQuantity = ? WHERE cartItemId = ?`;
        db.query(qry, [prodQuantity, cartItemId], (err) => {
            if (err) throw err;
            res.json({ status: res.statusCode, message: 'Cart item quantity updated' });
        });
    }
}
export {Users}