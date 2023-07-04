const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  categoryId: String,
  categoryName: String,
  description: String,
  parentCategoryId: String,
  isActive: Boolean,
  createdAt: String,
});
module.exports = model("Category", categorySchema);
