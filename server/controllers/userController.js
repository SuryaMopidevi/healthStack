const bcrypt = require('bcrypt');
const User = require('../models/userModel');

module.exports.updateProfile = async (req, res, next) => {
    try {
        const { actualName, username, email, password } = req.body;
        if( username.length < 5 )
            return res.status(400).json({ msg: "Username must be at least 5 characters long.", status: false });
        const updatedPassword = await bcrypt.hash(password, 12);
        const user = await User.updateOne({ username: actualName }, { username, email, password: updatedPassword, confirmPassword: updatedPassword });
        return res.status(200).json({ msg: "Profile updated successfully.", status: true });
    }
    catch (err) {
        next(err);
    }
};

module.exports.uploadProfilePic = async (req, res, next) => {
    try {
        const { url, username } = req.body;
        // console.log(req.body)
        const user = await User.findOneAndUpdate({ username }, { profilePic: url });
        // console.log(user)
    }
    catch (err) {
        next(err);
    }
};