var express = require('express');
var router = express.Router();
var api_u = require('../controllers/api/sanpham.api');

router.get('/sp',api_u.listSp);



module.exports = router;