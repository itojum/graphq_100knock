import { request } from 'graphql-request'

// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./query.graphql', import.meta.url));

const variables = {
  name: "良いコード/悪いコードで学ぶ設計入門",
  price: 3500,
  description: "良いコードと悪いコードの違いを学ぶことで、設計の重要性を理解することができます。",
  categoryId: "5"
}

request('http://127.0.0.1:4000/', query, variables)
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))