import { request } from 'graphql-request'
// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./query.graphql', import.meta.url));

const variables = {
  id : "1",
  title: "hogehogeが通じない新人エンジニア",
  content: "伝統的なエンジニアの方々が使う「hogehoge」という言葉は、最近の若いエンジニアには通じないことがあります。",
}

request('http://127.0.0.1:4000/', query, variables)
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))