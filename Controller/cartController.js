import express from 'express';
import bodyParser from 'body-parser';
import { cart } from '../model/index.js';

const cartRouter = express.Router();

cartRouter.use(bodyParser.json());

// Fetch Cart Items
cartRouter.get('/', (req, res) => {
    try {
        cart.fetchCartItems(req, res);
    } catch (e) {
        res.json({ status: res.statusCode, msg: 'Failed to retrieve cart items' });
    }
});

// Add to Cart
cartRouter.post('/add', (req, res) => {
    try {
        cart.addToCart(req, res);
    } catch (e) {
        res.json({ status: res.statusCode, msg: 'Failed to add item to cart' });
    }
});

// Remove Item
cartRouter.delete('/:cartItemId/delete', (req, res) => {
    try {
        cart.removeFromCart(req, res);
    } catch (e) {
        res.json({ status: res.statusCode, msg: 'Failed to remove item from cart' });
    }
});

// Update Item Quantity
cartRouter.patch('/:cartItemId/update', (req, res) => {
    try {
        cart.updateCartItemQuantity(req, res);
    } catch (e) {
        res.json({ status: res.statusCode, msg: 'Failed to update cart item quantity' });
    }
});

export { cartRouter };
