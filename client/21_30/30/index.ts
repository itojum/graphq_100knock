import { request } from 'graphql-request'

// GraphQLクエリファイルを読み込む
const newCategoryMutation = await Deno.readTextFile(new URL('./createCategory.graphql', import.meta.url));
const newProductMutation = await Deno.readTextFile(new URL('./createProduct.graphql', import.meta.url));

const variables = {
  categoryName: "車",
  productName: "TOYOTA プリウス",
  description: "ハイブリッドカー",
  price: 3000000,
}

const { newCategory }: any = await request('http://127.0.0.1:4000/', newCategoryMutation, variables)

console.log(newCategory)

const productVariables = {
  productName: variables.productName,
  description: variables.description,
  price: variables.price,
  categoryId: newCategory.id,
}

const { newProduct }: any = await request('http://127.0.0.1:4000/', newProductMutation, productVariables)
console.log(newCategory, newProduct)