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
  type Query {
    getUser(input: String!): User!
    getProducts(limit: Int!): [Product]!
  }
  type Mutation {
    createUser(userInput: UserInput): User!
    createProduct(productInput: ProductInput): Product!
  }
`;
