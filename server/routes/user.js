const { updateProfile, userList, user } = require("../controllers/userController");

const router = require("express").Router();
router.get("/", userList);
router.post("/updateprofile", updateProfile);
router.get('/:id', user)

module.exports = router;
