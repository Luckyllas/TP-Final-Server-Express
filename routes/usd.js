const express = require('express');
const router = express.Router();
const usdController = require('../controllers/usdController');
const jwtValidate = require("../middleware/jwtValidate");

router.get('/',jwtValidate, usdController.getCotiz);

module.exports = router;
