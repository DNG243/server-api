var myMD = require("../../models/sanpham.model");
var userMD = require("../../models/user.model");

exports.listSp = async (req, res, next) => {
  let listSp = await myMD.SpModel.find();
  console.log(listSp);
  res.render("sanpham/listSp", { listSp: listSp });
};

exports.listUser = async (req, res, next) => {
  let listUser = await userMD.userModel.find();
  console.log(listUser);
  res.render("sanpham/listUser", { listUser: listUser });
};
