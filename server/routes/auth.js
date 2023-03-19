const {register, login, adminLogin} = require('../controllers/authController')

const router = require('express').Router()

router.post('/register',register)
router.post('/login',login)
router.post('/adminLogin',adminLogin)

module.exports = router