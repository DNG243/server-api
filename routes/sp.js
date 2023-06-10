var express = require("express");
var router = express.Router();

var SpCtrl = require("../controllers/server/sanpham.server");

router.get("/listSp",SpCtrl.listSp);

router.get("/listUser",SpCtrl.listUser);

module.exports = router;