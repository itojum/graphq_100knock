import { request } from 'graphql-request'

// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./query.graphql', import.meta.url));

const variables = {
  content: "バッテリーの持ちが良く、日常使いに最適です。",
  rating: 5,
  productId: "d13c6a61-53f5-43b9-97d0-15b8913e8e3d",
  userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2",
}

request('http://127.0.0.1:4000/', query, variables)
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))