const router = require('express').Router();
const userRoute = require('./users');
const movieRoute = require('./movies');
const NotFound = require('../errors/NotFound');

router.use('/', userRoute);
router.use('/', movieRoute);

router.use((req, res, next) => {
  next(new NotFound({ message: 'Данный путь не найден' }));
});

module.exports = router;
