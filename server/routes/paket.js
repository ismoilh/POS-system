const express = require('express');
const router = express.Router();
const paid = require('../controllers/paket')


const cors = require('cors');
router.use(cors());


router.route("/")
    .get(paid.payment)
    .post(paid.payid);


module.exports = router;
