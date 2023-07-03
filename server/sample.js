const Offer = {
  id: String,
  title: String,
  description: String,
  price: Number,
  discount: Number,
  startDate: String,
  endDate: String,
  imageUrl: String,
  categories: String,
};
const registerAttributes = {
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  dateOfBirth: Date, // You can use a Date object or store it as a string
  phoneNumber: String,
  address: String,
  profilePicture: String,
};
const loginAttributes = {
  username: String,
  password: String,
};

const categoryAttributes = {
  categoryId: String,
  categoryName: String,
  description: String,
  parentCategoryId: String,
  isActive: Boolean,
  createdAt: Date,
};

const productAttributes = {
  productId: String,
  productName: String,
  description: String,
  price: Number,
  quantity: Number,
  categoryIds: [String],
  isActive: Boolean,
  createdAt: Date,
};
const recentProductAttributes = {
  productId: String,
  productName: String,
  description: String,
  price: Number,
  quantity: Number,
  categoryIds: [String],
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date,
};
