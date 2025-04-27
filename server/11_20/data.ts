type User = {
  id: string;
  name: string;
  email: string;
}

type Post = {
  id: string,
  title: string,
  content: string,
  authorId: string
};

export const users: User[] = [
  {
    id: '1',
    name: '山田太郎',
    email: 'yamada@example.com'
  },
  {
    id: '2',
    name: '佐藤花子',
    email: 'sato@example.com'
  },
  {
    id: '3',
    name: '鈴木一郎',
    email: 'suzuki@example.com'
  },
  {
    id: '4',
    name: '田中博',
    email: 'tanaka@example.com'
  },
  {
    id: '5',
    name: '伊藤雅子',
    email: 'ito@example.com'
  },
  {
    id: '6',
    name: '渡辺健太',
    email: 'watanabe@example.com'
  },
  {
    id: '7',
    name: '加藤美穂',
    email: 'kato@example.com'
  },
  {
    id: '8',
    name: '中村剛',
    email: 'nakamura@example.com'
  },
  {
    id: '9',
    name: '小林翔',
    email: 'kobayashi@example.com'
  },
  {
    id: '10',
    name: '高橋優子',
    email: 'takahashi@example.com'
  }
]

export const posts: Post[] = [
  {
    id: '1',
    title: '2025年の新しい技術トレンド',
    content: '2025年には、AIがより身近になり日常生活に組み込まれることが予想されます。特に自動化と個人化が進むでしょう。',
    authorId: '1'
  },
  {
    id: '2',
    title: '健康的な生活習慣のすすめ',
    content: '毎日の運動と栄養バランスの取れた食事は、長期的な健康維持に不可欠です。特に朝食の重要性は見逃せません。',
    authorId: '2'
  },
  {
    id: '3',
    title: '効率的な時間管理術',
    content: 'タスク管理と優先順位付けが重要です。ポモドーロテクニックを使って集中力を高めましょう。',
    authorId: '3'
  },
  {
    id: '4',
    title: '日本の伝統文化の魅力',
    content: '茶道や華道など、日本の伝統文化には深い精神性が宿っています。これらを学ぶことで新たな視点が得られるでしょう。',
    authorId: '4'
  },
  {
    id: '5',
    title: '世界の絶景スポット10選',
    content: 'マチュピチュやオーロラなど、一生に一度は訪れたい絶景スポットを紹介します。旅行計画の参考にしてください。',
    authorId: '5'
  },
  {
    id: '6',
    title: 'プログラミング入門：GraphQL編',
    content: 'GraphQLはRESTに代わる新しいAPIパラダイムです。効率的なデータ取得が可能になります。',
    authorId: '6'
  },
  {
    id: '7',
    title: '在宅勤務のコツ',
    content: '在宅勤務では、専用のワークスペースを設けることと、定期的な休憩が生産性向上のカギです。',
    authorId: '7'
  },
  {
    id: '8',
    title: '人気の室内植物と育て方',
    content: 'モンステラやポトスなど、初心者でも育てやすい観葉植物の育て方のコツを紹介します。',
    authorId: '8'
  },
  {
    id: '9',
    title: '最新スマートホームデバイス比較',
    content: '2025年の最新スマートホームデバイスを比較。機能性とプライバシー保護の観点から評価します。',
    authorId: '9'
  },
  {
    id: '10',
    title: '子供の創造性を育む遊び',
    content: 'デジタルデトックスと創造的な遊びが子供の発達にいかに重要かについて考察します。',
    authorId: '10'
  },
  {
    id: '11',
    title: '料理の基本テクニック',
    content: '切り方や火加減など、料理の基本テクニックをマスターすれば料理の幅が広がります。',
    authorId: '1'
  },
  {
    id: '12',
    title: '投資初心者のための資産運用ガイド',
    content: '分散投資と長期的視点が成功の鍵です。初心者が陥りやすい罠についても解説します。',
    authorId: '2'
  },
  {
    id: '13',
    title: '環境に優しい生活のすすめ',
    content: 'プラスチック削減やエネルギー消費の見直しなど、日常でできる環境保護活動を紹介します。',
    authorId: '3'
  },
  {
    id: '14',
    title: '効果的な学習方法',
    content: 'アクティブラーニングと適切な復習間隔が記憶定着には重要です。具体的な学習テクニックを紹介します。',
    authorId: '4'
  },
  {
    id: '15',
    title: '心を整えるマインドフルネス',
    content: '日常に取り入れられる簡単なマインドフルネス実践法。ストレス軽減に効果的です。',
    authorId: '5'
  },
  {
    id: '16',
    title: 'デジタルマーケティングの最新動向',
    content: 'AIを活用したパーソナライゼーションがトレンドです。消費者行動の変化にも注目しましょう。',
    authorId: '6'
  },
  {
    id: '17',
    title: '睡眠の質を向上させる方法',
    content: 'ブルーライトの制限と就寝前のルーティンが質の高い睡眠につながります。',
    authorId: '7'
  },
  {
    id: '18',
    title: '持続可能なファッションの選び方',
    content: 'エシカルな製造過程と長く使える品質が重要です。ファストファッションの問題点についても考えます。',
    authorId: '8'
  },
  {
    id: '19',
    title: 'プロジェクト管理のベストプラクティス',
    content: '明確なゴール設定と定期的な進捗確認が成功のカギです。チームコミュニケーションも重要視しましょう。',
    authorId: '9'
  },
  {
    id: '20',
    title: '日常に取り入れる瞑想法',
    content: '短時間でも効果的な瞑想テクニックを紹介。集中力向上とストレス軽減に役立ちます。',
    authorId: '10'
  }
]

// Postを渡すとauthorを付加して返す
const addAuthor = (post: Post) => {
  const author = users.find((user) => user.id === post.authorId);
  return {
    ...post,
    author
  }
}

export const getUsers = () => {
  return users
}
export const getPosts = () => {
  return posts.map(addAuthor)
}

export const getUserById = (id: string) => {
  return users.find((user) => user.id === id);
}

export const getPostById = (id: string) => {
  const post = posts.find((post) => post.id === id);
  return post ? addAuthor(post) : null;
}

export const postsByAuthor = (authorId: string) => {
  return posts.filter((post) => post.authorId === authorId).map(addAuthor);
}

export const createUser = (name: string, email: string) => {
  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email
  };
  users.push(newUser);
  return newUser;
}

export const createPost = (title: string, content: string, authorId: string) => {
  const newPost = {
    id: (posts.length + 1).toString(),
    title,
    content,
    authorId
  };
  posts.push(newPost);
  return newPost;
}