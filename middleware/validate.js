const {body, validationResult} = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
        return next();
    }else{
        const extractedErrors = [];
        errors.array().map(error=>extractedErrors.push({[error.type]: error.msg + ' Valor ingresado: ' + error.value}));

        res.status(400).json({errors: extractedErrors, msg:'Error de validacion.'});
    }

    
}

module.exports = {validate, body};