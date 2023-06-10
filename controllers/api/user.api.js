const md = require("../../models/user.model");

exports.Login = async (req, res, next) => {
  try {
    let objU = await md.userModel.find();
    console.log(objU);

    if (objU != null) {
        //có tồn tại user
        //kiểm tra pass
        if (objU.passwd == req.body.passwd) {
          //đăng nhập thành công
          //ghi dữ liệu vào session
          req.session.userLogin = objU;
          //chuyển trang
          return res.redirect("/");
        } else {
          msg = "sai password";
        }
      } else {
        msg = "không tồn tại user";
      }

    if (objU) {
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

exports.Reg = async (req, res, next) => {
  if (req.method == "POST") {
    console.log(req.body);
    //kiểm tra hợp lệ dữ liệu
    if (req.body.passwd != req.body.passwd2) {
      msg = "xác nhận password ko đúng";
      return res.render("user/reg", { msg: msg });
    }
    //tự viết thêm kiểm tra hợp lệ dữ liệu

    try {
      let objU = new md.userModel();
      objU.name = req.body.name;
      objU.username = req.body.username;
      objU.passwd = req.body.passwd;
      objU.email = req.body.email;
      objU.status = req.body.status;

      let new_u = await objU.save();
      if (new_u) {
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
