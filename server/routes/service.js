const {
  query,
  allQueries,
  allTransactions,
  prescriptionUpload,
  addComment,
  allComments,
  paymentFunction,
  prescriptioncheck
} = require("../controllers/serviceController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/query", verifyToken, query);
router.get("/allqueries", allQueries);
router.get("/allcomments", allComments);
router.get("/alltransactions", allTransactions);
router.post("/prescription", verifyToken, prescriptionUpload);
router.post("/addcomment", addComment);
router.post('/payment', paymentFunction)
router.get("/prescriptioncheck",prescriptioncheck)

module.exports = router;
