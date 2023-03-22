const { updateProfile, uploadProfilePic } = require('../controllers/userController');
const { upload } = require('../middlewares/multerMiddleware');

const router = require('express').Router();

router.post('/updateprofile', updateProfile);
router.post('/profilepic', uploadProfilePic);

module.exports = router;