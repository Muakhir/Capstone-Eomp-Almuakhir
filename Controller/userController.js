import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/index.js";
import { verifyToken } from "../middleware/AuthenticateUser.js";

const userRouter = express.Router();

//fetch users
userRouter.get('/', (req,res)=>{
    try{
        users.fetchUsers(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve users"
        })
    }
})

//fetch user
userRouter.get('/:id', (req,res)=>{
    try{
        users.fetchUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve the user"
        })
    }
})

//Add a user
userRouter.post('/register', bodyParser.json(),(req,res)=>{
    try{
        users.createUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to add a new user"
        })
    }
})

// Delete a user
userRouter.delete('/:id/deleteUser',bodyParser.json(),(req,res)=>{
    try{
        users.deleteUser(req,res)
    }catch(e){
        res.json({status: res.statusCode, msg: "Failed to delete a user"})
    }
})

// Update a user
userRouter.patch('/:id/updateUser',bodyParser.json(),(req,res)=>{
    try{
        users.alterUser(req,res)
    }catch(e){
        res.json({status: res.statusCode, msg: "Failed to update a user"})
    }
})

// login route
userRouter.post('/login',bodyParser.json(),(req,res)=>{
try{users.login(req,res)}catch(e){
res.json({status: res.statusCode, msg: "Failed to login"})
}
})

userRouter.get('/users/:id/cart', (req, res) => {
    try {
        users.fetchCartItems(req, res);
    } catch (e) {
        res.json({ status: res.statusCode, msg: 'Failed to retrieve cart items' });
    }
});

// Add to Cart
userRouter.post('/users/:id/add', (req, res) => {
    try {
        users.addToCart(req, res);
    } catch (e) {
        res.json({ status: res.statusCode, msg: 'Failed to add item to cart' });
    }
});

// Remove Item
userRouter.delete('/users/:id/:cartItemId/delete', (req, res) => {
    try {
        users.removeFromCart(req, res);
    } catch (e) {
        res.json({ status: res.statusCode, msg: 'Failed to remove item from cart' });
    }
});

// Update Item Quantity
userRouter.patch('/users/:id/:cartItemId/update', (req, res) => {
    try {
        users.updateCartItemQuantity(req, res);
    } catch (e) {
        res.json({ status: res.statusCode, msg: 'Failed to update cart item quantity' });
    }
});

export{userRouter,express}