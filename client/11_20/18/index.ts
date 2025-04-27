import { request } from 'graphql-request'
// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./query.graphql', import.meta.url));

const variables = {
  userId : "1"
}

request('http://127.0.0.1:4000/', query, variables)
  .then((data: any) => console.log(data.postsByAuthor.length))
  .catch((error) => console.error('Error:', error))