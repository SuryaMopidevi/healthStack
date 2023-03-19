const { updateProfile } = require('../controllers/userController');

const router = require('express').Router();

router.post('/updateprofile', updateProfile);

module.exports = router;