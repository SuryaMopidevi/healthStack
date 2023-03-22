const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "GNVPM";

module.exports.register = async (req, res, next) => {
    try {
        const { firstname, lastname, username, 
            email, password, confirmPassword, 
            usertype, pincode, phone, address,
            cart, status, transaction, products } = req.body;
        const usernameCheck = await User.findOne({username});
        if(usernameCheck)
            return res.json({ msg: "Username already exists", status: false });
        const emailCheck = await User.findOne({email});
        if(emailCheck)
            return res.json({ msg: "Email already exists", status: false });
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword,
            usertype,
            pincode,
            phone,
            address,
            status,
            transaction,
            cart,
            products,
        })
        delete user.password;
        return res.json({status: true, user });
    }
    catch(err){
        next(err)
    }
}

module.exports.login = async (req, res, next) => {
    try{
        const {username, email, password, usertype} = req.body;
        const usernameCheck = await User.findOne({username})
        if(!usernameCheck)
            return res.json({ msg: "Invalid username", status: false });
        const emailCheck = await User.findOne({email})
        if(!emailCheck)
            return res.json({ msg: "Invalid email", status: false });
        const passwordCheck = await bcrypt.compare(password, usernameCheck.password);
        if(!passwordCheck)
            return res.json({ msg: "Invalid password", status: false });
        const accessToken = jwt.sign({
            username: usernameCheck.username,
            email: usernameCheck.email,
            usertype: usernameCheck.usertype,
            password: usernameCheck.password,
        }, JWT_SECRET_KEY);
        delete usernameCheck.password;
        // console.log(usernameCheck)
        return res.json({status: true, user: usernameCheck, accessToken});
    }
    catch(err){
        next(err)
    }
}