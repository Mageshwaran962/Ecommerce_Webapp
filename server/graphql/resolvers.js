const UserModel = require("../models/userModel");
const ProductModel = require("../models/productModel");
const CategoryModel = require("../models/categoryModel");
const { v4: uuidV4 } = require("uuid");
const { ApolloError } = require("apollo-server-errors");
module.exports = {
  Query: {
    async getUser(_, { input }) {
      return await UserModel.findOne({ email: input });
    },
    async getProducts(_, { limit }) {
      return await ProductModel.find().limit(limit);
    },
    async getAllCategory(_, { limit }) {
      return await CategoryModel.find().limit(limit);
    },
    async getCategoryById(_, { categoryId }) {
      return await CategoryModel.findOne({ categoryId: categoryId });
    },
    async login(_, { loginInput: { email, password } }) {
      const user = await UserModel.findOne({
        email: email,
        password: password,
      });
      if (!user) {
        throw new ApolloError(
          "Invalid email or password",
          "INVALID EMAIL OR PASSWORD"
        );
      }
      return {
        id: user.id,
        ...user._doc,
      };
    },
  },
  Category: {
    async products(_, { categoryId }) {
      const query = { categoryIds: { $in: categoryId } };
      return await ProductModel.find(query);
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
    async createCategory(_, { categoryInput }) {
      const createCategory = new CategoryModel({
        ...categoryInput,
        categoryId: uuidV4(),
        isActive: true,
        createdAt: new Date().toISOString(),
      });
      const response = await createCategory.save();
      return {
        id: response.id,
        message: "successfully created",
        ...response._doc,
      };
    },
  },
};
