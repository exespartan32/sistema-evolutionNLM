const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res)=>{
    res.render('crearUsuario');
})

router.get('/users/signup', (req, res)=>{
    res.render('loginUser');
})

module.exports = router;