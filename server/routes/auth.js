const {register, login, newPassword} = require('../controllers/authController')

const router = require('express').Router()


router.post('/register',register)
router.post('/login',login)
router.post('/newPassword',newPassword)

module.exports = router