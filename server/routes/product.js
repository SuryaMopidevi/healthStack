const { medicines,healthcare, pharmaceutical, product } = require('../controllers/productController')
const router = require('express').Router()

router.get('/medicines', medicines)
router.get('/healthcare',healthcare)
router.get('/pharmaceutical',pharmaceutical)
router.get('/:id', product)

module.exports = router

