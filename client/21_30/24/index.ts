import { request } from 'graphql-request'

// GraphQLクエリファイルを読み込む
const query = await Deno.readTextFile(new URL('./query.graphql', import.meta.url));

request('http://127.0.0.1:4000/', query)
  .then((data: any) => {
    const categories = data.categories;
    categories.forEach((category: any) => {
      console.log(`Category: ${category.name}, ProductsCount: ${category.products.length}`);
    });
  })
  .catch((error) => console.error('Error:', error))