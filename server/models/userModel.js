const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
    cart: {
        type: [String],
    },
    products: {
        type: [String],
    },
    status: {
        type: String,
        default: 'active'
    },
    transaction: {
        type: Number,
        default: 0
    },
    pincode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User