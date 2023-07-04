const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    phoneNumber: String
    address: String
    createdAt: String
    isActive: Boolean
  }
  type Category {
    categoryId: String
    categoryName: String
    description: String
    parentCategoryId: String
    isActive: Boolean
    createdAt: String
    products(categoryId: [String!]): [Product]!
  }
  type Product {
    productId: String
    productName: String
    description: String
    price: Int
    quantity: Int
    categoryIds: [String]
    isActive: Boolean
    createdAt: String
    imageUrl: String
  }
  input UserInput {
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    phoneNumber: String
    address: String
  }
  input ProductInput {
    productId: String
    productName: String
    description: String
    price: Int
    quantity: Int
    categoryIds: [String]
    imageUrl: String
  }
  input UserLogin {
    email: String!
    password: String!
  }
  input CategoryInput {
    categoryName: String
    description: String
    parentCategoryId: String
  }
  type Query {
    getUser(input: String!): User!
    getProducts(limit: Int!): [Product]!
    login(loginInput: UserInput): User!
    getAllCategory(limit: Int!): [Category]!
    getCategoryById(categoryId: String!): Category!
  }
  type Mutation {
    createUser(userInput: UserInput): User!
    createProduct(productInput: ProductInput): Product!
    createCategory(categoryInput: CategoryInput): Category!
  }
`;
