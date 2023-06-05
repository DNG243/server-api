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

