import { categories, products, reviews } from "./data.ts";
import { Category, Product, Review } from "./types.ts";


const typeDefs = `#graphql
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    category: Category!
    reviews: [Review!]!
  }

  type Review {
    id: ID!
    content: String!
    rating: Int!
    product: Product!
  }

  type Query {
    category(id: ID!): Category
    categories: [Category!]!
    product(id: ID!): Product
    products: [Product!]!
    productsByCategory(categoryId: ID!): [Product!]!
    reviews: [Review!]!
  }

  type Mutation {
    createCategory(name: String!): Category!
    createProduct(name: String!, description: String!, price: Float!, categoryId: ID!): Product!
    updateProduct(id: ID!, name: String, description: String, price: Float): Product!
    createReview(content: String!, rating: Int!, productId: ID!): Review!
  }
`;

type argType = {
  // deno-lint-ignore no-explicit-any
  [key: string]: any;
}

const resolvers = {
  Query: {
    category: (_parent: any, arg: argType) => {
      return categories.find(category => category.id === arg.id);
    },
    categories: () => categories,
    product: (_parent: any, arg: argType) => { 
      return products.find(product => product.id === arg.id);
    },
    products: () => products,
    productsByCategory: (_parent: any, arg: argType) => {
      return products.filter(product => product.categoryId === arg.categoryId);
    },
    reviews: () => reviews,
  },
  Mutation: {
    createCategory: (_parent: any, arg: argType) => {
      const { name } = arg;
      const newCategory = {
        id: (categories.length + 1).toString(),
        name
      };
      categories.push(newCategory);
      return newCategory;
    },
    createProduct: (_parent: any, arg: argType) => {
      const { name, description, price, categoryId } = arg;
      const newProduct = {
        id: (products.length + 1).toString(),
        name,
        description,
        price,
        categoryId
      };
      products.push(newProduct);
      return newProduct;
    },
    updateProduct: (_parent: any, arg: argType) => {
      const { id, name, description, price } = arg;
      const product = products.find(product => product.id === id);
      if (product) {
        if (name) product.name = name;
        if (description) product.description = description;
        if (price) product.price = price;
      }
      return product;
    },
    createReview: (_parent: any, arg: argType) => {
      const { content, rating, productId } = arg;
      const newReview = {
        id: (reviews.length + 1).toString(),
        content,
        rating,
        productId
      };
      reviews.push(newReview);
      return newReview;
    }
  },
  Category: {

    products : (category: Category) => {
      return products.filter(product => product.categoryId === category.id);
    }
  },
  Product: {

    category: (product: Product) => {
      return categories.find(category => category.id === product.categoryId);
    },
    reviews: (product: Product) => {
      
      return reviews.filter(review => review.productId === product.id);
    }
  },
  Review: {
    
    product: (review: Review) => {
      return products.find(product => product.id === review.productId);
    }
  }

};

export { typeDefs, resolvers };