const { medicines,healthcare,pharmaceutical, 
       product, newProduct, allProducts } = require('../controllers/productController')
const router = require('express').Router()

router.get('/', allProducts)
router.get('/medicines', medicines)
router.get('/healthcare',healthcare)
router.get('/pharmaceutical',pharmaceutical)
router.get('/:id', product)
router.post('/newProduct', newProduct)



module.exports = router

