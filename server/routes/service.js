const {
  query,
  transaction,
  allQueries,
  allTransactions,
  prescriptionUpload,
  addComment,
  allComments,
} = require("../controllers/serviceController");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/query", verifyToken, query);
router.post("/transaction", verifyToken, transaction);
router.get("/allqueries", allQueries);
router.get("/allcomments", allComments);
router.get("/alltransactions", allTransactions);
router.post("/prescription", verifyToken, prescriptionUpload);
router.post("/addcomment", addComment);

module.exports = router;
