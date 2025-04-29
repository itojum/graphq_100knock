export const typeDefs = `#graphql
  type Category {
    id: ID!
    name: String!
    products(filter: ProductFilterInput): [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    category: Category!
    reviews(filter: ReviewFilterInput): [Review!]!
  }

  type Review {
    id: ID!
    content: String!
    rating: Int!
    product: Product!
  }

  input ProductFilterInput {
    minPrice: Float
    maxPrice: Float
  }

  input ReviewFilterInput {
    minRating: Int
  }

  type Query {
    category(id: ID!): Category
    categories: [Category!]!
    product(id: ID!): Product
    products(filter: ProductFilterInput): [Product!]!
    reviews(filter: ReviewFilterInput): [Review!]!
  }

  type Mutation {
    createCategory(name: String!): Category!
    createProduct(name: String!, description: String!, price: Float!, categoryId: ID!): Product!
    updateProduct(id: ID!, name: String, description: String, price: Float): Product!
    createReview(content: String!, rating: Int!, productId: ID!): Review!
  }
`;
