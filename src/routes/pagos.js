const express = require('express');
const router = express.Router();
// --------------------------------------------------------------- //
// ····················· ingresar pago ··························· //
// --------------------------------------------------------------- //
router.get('/pagos/ingresarPago',(req, res)=>{
    res.render('addPay')
})

router.post('/pagos/addPay',(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ····················· editar pago ····························· //
// --------------------------------------------------------------- //
router.get('/pagos/editarPago',(req, res)=>{
    res.render('editPay')
})

router.post('/pagos/',(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ····················· eliminar pago ··························· //
// --------------------------------------------------------------- //
router.get('/pagos/borrarPago',(req, res)=>{
    res.render('remuvePay')
})

router.post('/pagos/',(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ····················· ver todos los pagos ····················· //
// --------------------------------------------------------------- //
router.get('/pagos/verPago',(req, res)=>{
    res.render('showPay')
})
// --------------------------------------------------------------- //
// ····················· ver pago de alumno x ···················· //
// --------------------------------------------------------------- //
router.get('/pagos/verPagoAlumno',(req, res)=>{
    res.render('showPayAlumn')
})
// --------------------------------------------------------------- //
// ····················· buscar tiket de pago ···················· //
// --------------------------------------------------------------- //
router.get('/pagos/buscarTiket',(req, res)=>{
    res.render('showTiket')
})

router.post('/pagos/',(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})

module.exports = router;