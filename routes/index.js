const router = require('express').Router();
const userRoute = require('./users');
const movieRoute = require('./movies');
const NotFound = require('../errors/NotFound');
const { createUser, login } = require('../controllers/users');
const { registerValid, loginValid } = require('../middlewares/joi');

// логин
router.post('/signin', loginValid, login);

// регистрация
router.post('/signup', registerValid, createUser);

router.use('/', userRoute);
router.use('/', movieRoute);

router.use('*', () => {
  throw new NotFound({ message: 'Данный путь не найден' });
});

module.exports = router;
