import { categories, products } from "./data.ts";
import { Category, Product } from "./types.ts";


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
  }

  type Query {
    category(id: ID!): Category
    categories: [Category!]!
    product(id: ID!): Product
    products: [Product!]!
    productsByCategory(categoryId: ID!): [Product!]!
  }

  type Mutation {
    createCategory(name: String!): Category!
    createProduct(name: String!, description: String!, price: Float!, categoryId: ID!): Product!
    updateProduct(id: ID!, name: String, description: String, price: Float): Product!
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
    }
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
    }
  }

};

export { typeDefs, resolvers };