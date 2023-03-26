const { query, allQueries,allTransactions } = require('../controllers/serviceController')

const router = require('express').Router()

router.post('/query', query)
router.get('/allqueries', allQueries)
router.get('/alltransactions',allTransactions)

module.exports = router