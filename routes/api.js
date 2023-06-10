var express = require('express');
var router = express.Router();
var api_sp = require('../controllers/api/sanpham.api');
var api_user = require('../controllers/api/user.api');

router.get('/sp',api_sp.listSp);

router.post('/add',api_sp.addSp);

router.get('/login',api_user.Login);

router.post('/reg',api_user.Reg);

router.get('/listUser',api_user.listUser);



module.exports = router;