const db = require("./db");
const userSchema = new db.mongoose.Schema(
  {
    name: { type: String },
    username: { type: String },
    passwd: { type: String },
    email: { type: String },
    avatar: { type: String },
  },
  { collection: "tb_user" }
);
let userModel = db.mongoose.model("userModel", userSchema);
module.exports = { userModel };
