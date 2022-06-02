const express = require('express');
const router = express.Router();

const Pago = require('../models/Pagos');
// --------------------------------------------------------------- //
// ····················· ingresar pago ··························· //
// --------------------------------------------------------------- //
router.get('/pagos/ingresarPago',(req, res)=>{
    res.render('addPay')
})

router.post('/pagos/addPay', async(req, res)=>{
    console.log(req.body)
    const {nombreAlumno, apellidoAlumno, pagoMonto, pagoMes} = req.body;
    const errors = [];
    if(!nombreAlumno){
        errors.push({text: 'Por favor ingrese un nombre'});
    }
    if(!apellidoAlumno){
        errors.push({text: 'Por favor ingrese un apellido'});
    }
    if(!pagoMonto){
        errors.push({text: 'Por favor ingrese un monto'});
    }
    if(!pagoMes){
        errors.push({text: 'Por favor ingrese un mes'});
    }
    if(errors.length > 0){
        res.render('addPay', {errors});
    }else {
       const newPago = new Pago({nombreAlumno, apellidoAlumno, pagoMonto, pagoMes});
       console.log(newPago);
       await newPago.save();
       res.redirect('/pagos/ingresarPago');
    }
    //res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ····················· editar pago ····························· //
// --------------------------------------------------------------- //
router.get('/pagos/editarPago/:id', async(req, res)=>{
    const pago = await Pago.findById(req.params.id);
    res.render('edit-pay', {pago})
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
router.get('/pagos/verPago', async(req, res)=>{
    const pagos = await Pago.find().lean();
    console.log('Array-->',pagos[0]);
    console.log(pagos.length);
    res.render('showPay',{pagos});
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