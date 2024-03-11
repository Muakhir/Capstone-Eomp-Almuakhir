import { sqlConnect as db } from "../config/index.js";


class Cart {
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
        const qry = `DELETE FROM Cart WHERE id = ?`;
        db.query(qry, [cartItemId], (err) => {
            if (err) throw err;
            res.json({ status: res.statusCode, message: 'Item removed from cart' });
        });
    }

    async updateCartItemQuantity(req, res) {
        const { cartItemId } = req.params;
        const { prodQuantity } = req.body;
        const qry = `UPDATE Cart SET quantity = ? WHERE cartItemId = ?`;
        db.query(qry, [prodQuantity, cartItemId], (err) => {
            if (err) throw err;
            res.json({ status: res.statusCode, message: 'Cart item quantity updated' });
        });
    }

    // Other methods like fetchUserCart, checkout, etc.
}

export { Cart };
