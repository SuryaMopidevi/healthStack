const { query } = require('../controllers/serviceController')

const router = require('express').Router()

router.post('/query', query)

module.exports = router