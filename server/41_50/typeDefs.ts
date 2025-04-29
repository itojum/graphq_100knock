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
    reviews(filter: ReviewFilterInput, sortBy: ReviewsSortBy): [Review!]!
    reviewCount: Int!
    averageRating: Float
    favoritedBy: [User!]!
  }

  type Review {
    id: ID!
    content: String!
    rating: Int!
    product: Product!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    bio: String
    location: String
    website: String
    registeredAt: String!
    reviews: [Review!]!
    favorites: [Product!]!
    favoriteProductCount: Int!
    followers: [User!]!
    following: [User!]!
    followerCount: Int!
    followingCount: Int!
  }

  type Favorite {
    user: User!
    product: Product!
  }

  type Follow {
    user: User!
    following: [User!]!
  }

  type ProductConnection {
    items: [Product!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    totalCount: Int!
    totalPages: Int!
    currentPage: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  input ProductFilterInput {
    minPrice: Float
    maxPrice: Float
  }

  input ReviewFilterInput {
    minRating: Int
  }
  enum ReviewsSortBy {
    RATING_ASC
    RATING_DESC
  }

  type Query {
    category(id: ID!): Category
    categories: [Category!]!
    product(id: ID!): Product
    products(filter: ProductFilterInput): [Product!]!
    reviews(filter: ReviewFilterInput): [Review!]!
    user(id: ID!): User
    users: [User!]!
    searchUsers(query: String!): [User!]!
    paginatedProducts(page: Int!, limit: Int!): ProductConnection!
  }

  type Mutation {
    createCategory(name: String!): Category!
    createProduct(name: String!, description: String!, price: Float!, categoryId: ID!): Product!
    updateProduct(id: ID!, name: String, description: String, price: Float): Product!
    createReview(content: String!, rating: Int!, productId: ID!, userId: ID!): Review!
    addFavorite(userId: ID!, productId: ID!): Favorite!
    removeFavorite(userId: ID!, productId: ID!): Boolean!
    followUser(userId: ID!, followingId: ID!): Follow!
    unfollowUser(userId: ID!, followingId: ID!): Boolean!
    updateUserProfile(userId: ID!, bio: String, location: String, website: String): User!
  }
`;
