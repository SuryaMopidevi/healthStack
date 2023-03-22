const { query, transaction } = require('../controllers/serviceController')
const { verifyToken } = require('../middlewares/verifyToken');

const router = require('express').Router()

router.post('/query', verifyToken, query)
router.post('/transaction', verifyToken, transaction)

module.exports = router