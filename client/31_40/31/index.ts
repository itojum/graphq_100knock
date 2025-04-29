import { request } from 'graphql-request'

// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./query.graphql', import.meta.url));

const variables = {
  content: "バッテリーの持ちが良く、日常使いに最適です。",
  rating: 5,
  productId: "1"
}

request('http://127.0.0.1:4000/', query, variables)
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))