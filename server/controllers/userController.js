const bcrypt = require("bcrypt");
const User = require("../models/userModel");

module.exports.user = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id)
        return res.json(user)
    }
    catch(err) {
        next(err)
    }
}

module.exports.updateProfile = async (req, res, next) => {
  try {
    const { actualName, username, email, password } = req.body;
    if (username.length < 5)
      return res
        .status(400)
        .json({
          msg: "Username must be at least 5 characters long.",
          status: false,
        });
    const updatedPassword = await bcrypt.hash(password, 12);
    const user = await User.updateOne(
      { username: actualName },
      {
        username,
        email,
        password: updatedPassword,
        confirmPassword: updatedPassword,
      }
    );
    return res
      .status(200)
      .json({ msg: "Profile updated successfully.", status: true });
  } catch (err) {
    next(err);
  }
};

module.exports.userList = async (req, res, next) => {
  try {
    const users = await User.find();
    console.log(users)
    const userArray = [];
    console.log("users", users);
    for (let i = 0; i < users.length; i++) {
      userArray.push({ ...users[i], id: i + 1 });
    }
    console.log(userArray);
    return res.json(userArray);
  } catch (err) {
    next(err);
  }
};
