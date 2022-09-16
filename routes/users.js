const router = require('express').Router();

const auth = require('../middlewares/auth');
const {
  userValid,
} = require('../middlewares/joi');

const {
  updateProfile,
  getCurrentUser,
} = require('../controllers/users');

router.get('/me', auth, getCurrentUser);
router.patch('/me', auth, userValid, updateProfile);

module.exports = router;
