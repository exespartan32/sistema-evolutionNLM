const express = require('express');
const router = express.Router();

const Deudas = require('../models/Deudas')

// --------------------------------------------------------------- //
// ····················· ingresar deuda ·························· //
// --------------------------------------------------------------- //
router.get('/deuda/ingresarDeuda',(req, res)=>{
    res.render('deudas/addDebt')
})

router.post('/deuda/addDebt', async (req, res) => {
    var data = (req.body)
    //console.log(data)
    const { nombreAlumno, apellidoAlumno, deuda } = data

    const errors = [];
    if (!nombreAlumno) {
        errors.push({ text: 'Por Favor escriba un Nombre' })
    }
    if (!apellidoAlumno) {
        errors.push({ text: 'Por Favor escriba un Apellido' })
    }
    if (!deuda) {
        errors.push({ text: 'Por Favor ingrese una deuda' })
    }

    if (errors.length > 0) {
        res.render('deudas/addDebt', {
            errors,
            nombreAlumno,
            apellidoAlumno,
            deuda
        })
    } else {
        const newPay = new Deudas({ nombreAlumno, apellidoAlumno, deuda })
        await newPay.save()
        //console.log(newPay)
        res.send('datos guardados en DB')
        //res.redirect('/savePay')
    }
})

// --------------------------------------------------------------- //
// ····················· editar deuda ···························· //
// --------------------------------------------------------------- //
router.get('/deuda/editarDeuda', async(req, res)=>{
    const debts = await Deudas.find().sort({ date: 'desc' });
    res.render('deudas/editDebt', { debts })
})

router.post('/deuda/reciveEdit', async(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ····················· eliminar deuda ·························· //
// --------------------------------------------------------------- //
router.get('/deuda/eliminarDeuda', async(req, res)=>{
    const debts = await Deudas.find().sort({ date: 'desc' });
    res.render('deudas/remuveDebt', { debts })
})

router.post('/deuda/reciveDelate',(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ·················· ver todas las  deudas ······················ //
// --------------------------------------------------------------- //
router.get('/deuda/verDeuda', async(req, res)=>{
    const debts = await Deudas.find().sort({ date: 'desc' });
    res.render('deudas/showDebt', { debts })
})
// --------------------------------------------------------------- //
// ·················· ver deuda de alumno x ······················ //
// --------------------------------------------------------------- //
router.get('/deuda/VerDeudaAlumno', async (req, res)=>{
    const debts = await Deudas.find().sort({ date: 'desc' });
    res.render('deudas/showDebtAlumn', { debts })
})

module.exports = router;