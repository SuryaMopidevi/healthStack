const Product = require('../models/productModel')

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