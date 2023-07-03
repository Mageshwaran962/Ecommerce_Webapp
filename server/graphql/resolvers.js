const UserModel = require("../models/userModel");
const ProductModel = require("../models/productModel");
const { v4: uuidV4 } = require("uuid");
module.exports = {
  Query: {
    async getUser(_, { input }) {
      return await UserModel.findOne({ email: input });
    },
    async getProducts(_, { limit }) {
      return await ProductModel.find().limit(limit);
    },
  },
  Mutation: {
    async createUser(_, { userInput }) {
      const createUser = new UserModel({
        ...userInput,
        isActive: true,
        createdAt: new Date().toISOString(),
      });
      const response = await createUser.save();
      return {
        id: response.id,
        ...response._doc,
      };
    },
    async createProduct(_, { productInput }) {
      const createProduct = new ProductModel({
        productId: uuidV4(),
        ...productInput,
      });
      const response = await createProduct.save();
      return {
        id: response.id,
        message: "successfully created",
        ...response._doc,
      };
    },
  },
};
