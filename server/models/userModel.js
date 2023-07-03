const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  address: String,
  createdAt: String,
  isActive: Boolean,
});

module.exports = model("Users", userSchema);
