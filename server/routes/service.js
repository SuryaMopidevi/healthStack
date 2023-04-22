const { query, transaction, allQueries, allTransactions, prescriptionUpload } = require('../controllers/serviceController')
const { verifyToken } = require('../middlewares/verifyToken');

const router = require('express').Router()

router.post('/query', verifyToken, query)
router.post('/transaction', verifyToken, transaction)
router.get('/allqueries', allQueries)
router.get('/alltransactions',allTransactions)
router.post("/prescription", verifyToken, prescriptionUpload)

module.exports = router