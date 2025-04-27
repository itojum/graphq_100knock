import { request } from 'graphql-request'
// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./query.graphql', import.meta.url));

type Post = {
  id: string
  title: string
}

request('http://127.0.0.1:4000/', query)
  .then((data: any) => {
    const { posts } = data
    console.log(posts.sort((a: Post, b: Post) => a.title.localeCompare(b.title)))
  })
  .catch((error) => console.error('Error:', error))