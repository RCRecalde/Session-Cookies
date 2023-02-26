var express = require('express');
var router = express.Router();
const {form1, form1post, cierroSesion, destroy} = require('../controllers/controller')
const {form1validation} = require('../validations/form1validation')

router.get('/', form1);
router.post('/', form1validation,form1post);

router.get('/color', cierroSesion);
router.post('/destroy', destroy);


module.exports = router;
