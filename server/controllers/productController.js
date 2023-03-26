const Product = require('../models/productModel')
const User = require('../models/userModel')

module.exports.medicines = async (req,res,next) => {
    try {
        const medicines = await Product.find({type: 'medicine'})
        return res.json(medicines)
    }
    catch(err) {
        next(err)
    }
}

module.exports.healthcare = async (req,res,next) => {
    try {
        const healthcare = await Product.find({type: 'healthcare'})
        return res.json(healthcare)
    }
    catch(err) {
        next(err)
    }
}

module.exports.pharmaceutical = async (req,res,next) => {
    try {
        const pharmaceuticals = await Product.find({type: 'pharmaceutical'})
        return res.json(pharmaceuticals)
    }
    catch(err) {
        next(err)
    }
}

module.exports.product = async (req,res,next) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.json(product)
    }
    catch(err) {
        next(err)
    }
}

module.exports.newProduct = async (req,res,next) => {
    try {
        const { productname, img, type, price, status } = req.body;
        const productCheck = await Product.findOne({ productname })
        if(!productCheck){ 
            const product = new Product({productname, img, type, price, status});
            await product.save();
            return res.json({status : true})
        }
        else{
            return res.json({status : false})
        }
    }
    catch (err) {
        next(err);
    }
}

module.exports.allProducts = async(req,res,next) => {
    try{
        const products = await Product.find({})
        const productArray = []
        for(let i=0; i<products.length; i++){
            productArray.push({...products[i], id : i + 1})
        }
        // console.log(productArray)
        return res.json(productArray)
    }
    catch(err){
       next(err);
   }
}

