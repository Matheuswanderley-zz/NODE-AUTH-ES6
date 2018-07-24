const express = require('express');

const router = express.Router();

const auth = require('../controllers/AuthControllers');

router.get('/', auth.home);

router.get('/register', auth.register);

router.post('/register', auth.doRegister);

router.get('/login', auth.login);

router.post('/login', auth.doLogin);

router.get('/logout', auth.logout);

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
