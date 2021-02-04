const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/users');
const cors = require('cors');
const auth = require('../schemas');

router.use(cors());




router.route('/register')
    .post(users.register);

router.route('/activation')
    .post(users.activateAccount)
    .get(users.getToken)

router.route('/login')
    .post(users.login)

router.route('/delete/:id', auth)
    .delete(users.delete)

router.route('/tokenIsValid')
    .post(users.tokenIsValid);

router.route('/', auth)
    .get(users.mainPage);

module.exports = router;