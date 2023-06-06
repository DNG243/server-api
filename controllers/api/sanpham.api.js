var md = require("../../models/sanpham.model");

exports.listSp = async (req, res, next) => {
  try {
    let list = await md.SpModel.find();
    if (list) {
      return res
        .status(200)
        .json({ data: list, msg: "lay du lieu thanh cong" });
    } else {
      return res.status(204).json({ msg: "khong co du lieu" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.addSp = async (req, res, next) => {
  if (req.method == "POST") {
    let objSP = new md.SpModel();
    objSP.name = req.body.name;
    objSP.price = req.body.price;
    objSP.brand = req.body.brand;
    objSP.img = req.body.img;
    objSP.des = req.body.des;

    try {
      let new_sp = await objSP.save();
      console.log(new_sp);
      if (new_sp) {
        return res
          .status(200)
          .json({ data: list, msg: "lay du lieu thanh cong" });
      } else {
        return res.status(204).json({ msg: "khong co du lieu" });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
};
