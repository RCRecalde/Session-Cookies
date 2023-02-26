const {body}=require('express-validator')

const form1validation = [
    body('nombre').notEmpty().withMessage('*Campo requerido'),
    body('color').notEmpty().withMessage('*Campo requerido'),
    body('email').notEmpty().withMessage('*Campo requerido').bail()
    .isEmail().withMessage('*Correo electrónico inválido'),
    body('edad').isInt().withMessage('*Debes ingresar un número')
]
module.exports = {form1validation}