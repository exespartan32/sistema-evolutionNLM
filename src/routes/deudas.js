const express = require('express');
const router = express.Router();
// --------------------------------------------------------------- //
// ····················· ingresar deuda ·························· //
// --------------------------------------------------------------- //
router.get('/deuda/ingresarDeuda',(req, res)=>{
    res.render('addDebt')
})

router.post('/deuda/addDebt',(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ····················· editar deuda ···························· //
// --------------------------------------------------------------- //
router.get('/deuda/editarDeuda',(req, res)=>{
    res.render('editDebt')
})

router.post('/deuda/',(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ····················· eliminar deuda ·························· //
// --------------------------------------------------------------- //
router.get('/deuda/eliminarDeuda',(req, res)=>{
    res.render('remuveDebt')
})

router.post('/deuda/',(req, res)=>{
    console.log(req.body)
    res.send('datos recibidos')
})
// --------------------------------------------------------------- //
// ·················· ver todas las  deudas ······················ //
// --------------------------------------------------------------- //
router.get('/deuda/verDeuda',(req, res)=>{
    res.render('showDebt')
})
// --------------------------------------------------------------- //
// ·················· ver deuda de alumno x ······················ //
// --------------------------------------------------------------- //
router.get('/deuda/VerDeudaAlumno',(req, res)=>{
    res.render('showDebtAlumn')
})

module.exports = router;