import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router  = express.Router()

//@desc    fetch all products
//@router  Get /api/products
//@access  Public
router.get('/', asyncHandler (async(req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

//@desc    fetch single products
//@router  Get /api/products/:id
//@access  Public
//kur don mi shfaq varesisht te id-se qe ti po don me tu shfaq ne prapavije
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
    res.json(product)
    }else{
        res.status(404).json({ message: 'Product Not found'})
    }
}))

export default router