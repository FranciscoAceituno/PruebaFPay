const { Router } = require('express');
const { check } = require('express-validator');
const { getNrosPrimos} = require('../controllers/calculoController');
const router = Router();


// router.get('/obtenerPrimos',[
//     check('param', 'El parametro debe ser ingresado').not().isEmpty(),
//     check('param', 'El monto debe ser numerico').isNumeric(),
// ], getNrosPrimos);

router.get('/', getNrosPrimos );


module.exports = router;