import express from 'express';
import bodyParser from 'body-parser'
import { products } from '../model/index.js'

const productRouter = express.Router()

// Fetch Products
productRouter.get('/', (req, res) => {
    try{
        products.fetchProducts(req,res)
    }catch(e){
        res.json({ status: res.statusCode,msg: 'Failed to retrieve products'})
    }
})

// Fetch a Product
productRouter.get('/:id', (req, res) => {
    try{
        products.fetchProduct(req,res)
    }catch(e){
        res.json({ status: res.statusCode,msg: 'Failed to retrieve product'})
    }
})

// Add a Product
productRouter.post('/addProduct',bodyParser.json(),(req,res)=>{
    try{
        products.addProduct(req,res)
    }catch(e){
        res.json({ status: res.statusCode,msg: 'Failed to add new product'})
    }
})

// Delete a Product
productRouter.delete('/:id/deleteProduct',bodyParser.json(),(req,res)=>{
    try{
        products.deleteProduct(req,res)
    }catch(e){
        res.json({status: res.statusCode, msg: "Failed to delete a Product"})
    }
})

// Update a Product
productRouter.patch('/:id/updateProduct',bodyParser.json(),(req,res)=>{
    try{
        products.alterProduct(req,res)
    }catch(e){
        res.json({status: res.statusCode, msg: "Failed to update a Product"})
    }
})

export{productRouter}