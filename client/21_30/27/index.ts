import { request } from 'graphql-request'

// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./query.graphql', import.meta.url));


request('http://127.0.0.1:4000/', query)
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))