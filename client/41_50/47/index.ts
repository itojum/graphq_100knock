import { request } from 'graphql-request'

// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./unfollow.graphql', import.meta.url));

const variables = {
  userId: "a7b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2",
  followingId: "e1f2a3b4-c5d6-e7f8-a9b0-c1d2e3f4a5b6"
}

request('http://127.0.0.1:4000/', query, variables)
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))