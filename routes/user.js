const express = require('express');
const router = express.Router();
const {validate} = require("../middleware/validate");
const userController = require('../controllers/userController');
const {username, password} = require('../utils/validations');
const jwtValidate = require("../middleware/jwtValidate");

router.get('/', jwtValidate, userController.getAllUsers);

router.post('/',username, password, validate, userController.createUser);
router.post('/login', userController.loginUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;