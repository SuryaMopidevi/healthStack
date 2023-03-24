const { updateProfile, uploadProfilePic, profileDetails } = require('../controllers/userController');
const { upload } = require('../middlewares/multerMiddleware');

const router = require('express').Router();

router.post('/updateprofile', updateProfile);
router.post('/profilepic', uploadProfilePic);
router.post('/profiledetails',profileDetails)

module.exports = router;