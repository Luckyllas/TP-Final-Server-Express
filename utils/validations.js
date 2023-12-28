const { check } = require("express-validator");

const userId = check('userId')
.notEmpty().
withMessage('El user ID es obligatorio.')
.isNumeric()
.withMessage('El user ID debe ser numerico.')
.isLength({min: 3, max: 8})
.withMessage('La longitud del user ID debe ser de entre 3 y 8 caracteres.');

const title = check('title')
.notEmpty().
withMessage('El titulo es obligatorio.')
.isString()
.withMessage('El titulo debe ser cadena.')
.isLength({min: 5, max: 20})
.withMessage('La longitud del titulo debe ser de entre 5 y 20 caracteres.');

const username = check('username')
.notEmpty().
withMessage('El username es obligatorio.')
.isString()
.withMessage('El username debe ser cadena.')
.isLength({min: 5, max: 10})
.withMessage('La longitud del username debe ser de entre 5 y 10 caracteres.');

const password = check('password')
.notEmpty().
withMessage('El password es obligatorio.')
.isString()
.withMessage('El password debe ser cadena.')
.isLength({min: 5, max: 15})
.withMessage('La longitud del password debe ser de entre 5 y 15 caracteres.');

const nameProduct = check('nameProduct')
.notEmpty().
withMessage('El nombre del producto es obligatorio.')
.isLength({min: 5, max: 20})
.withMessage('La longitud del password debe ser de entre 5 y 20 caracteres.');

const description = check('description')
.notEmpty().
withMessage('La descripcion es obligatorio.')
.isString()
.withMessage('La descripcion debe ser cadena.')
.isLength({min: 5, max: 50})
.withMessage('La longitud de la descipcion debe ser de entre 5 y 50 caracteres.');

const priceArs = check('priceArs')
.notEmpty().
withMessage('El precio es obligatorio.')
.isNumeric()
.withMessage('El precio debe ser numerico.');

module.exports = {userId, title, username, password, nameProduct, description, priceArs};