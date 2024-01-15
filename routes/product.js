const express = require('express');
const router = express.Router();
const {validate} = require("../middleware/validate");
const productController = require('../controllers/productController');
const {nameProduct, description, priceArs} = require('../utils/validations');
const jwtValidate = require("../middleware/jwtValidate");
const validateProduct = require("../middleware/validateProductId");


router.get('/', jwtValidate, productController.getAllProducts);
router.get('/:id', validateProduct, productController.getProductById);

router.post('/', nameProduct, description, priceArs, validate, productController.createProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;