const { query, transaction } = require('../controllers/serviceController')

const router = require('express').Router()

router.post('/query', query)
router.post('/transaction', transaction)

module.exports = router