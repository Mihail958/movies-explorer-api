const router = require('express').Router();
const userRoute = require('./users');
const movieRoute = require('./movies');
const NotFound = require('../errors/NotFound');
const { createUser, login } = require('../controllers/users');
const { registerValid, loginValid } = require('../middlewares/joi');
const auth = require('../middlewares/auth');

// логин
router.post('/signin', loginValid, login);

// регистрация
router.post('/signup', registerValid, createUser);

router.use('/', userRoute);
router.use('/', movieRoute);

router.use(auth);
router.use('*', (req, res, next) => {
  next(new NotFound('Данный путь не найден'));
});

module.exports = router;
