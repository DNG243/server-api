var db = require("./db");

var SpSchema = new db.mongoose.Schema(
  {
    name: { type: String },
    price: { type: String },
    brand: { type: String },
    img: [{ type: String }],
    des: { type: String },
  },
  { collection: "sanpham" }
);

let SpModel = db.mongoose.model("SpModel", SpSchema);
module.exports = { SpModel };
