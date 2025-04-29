export type Category = {
  id: string
  name: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  categoryId: string
}

export type Review = {
  id: string
  content: string
  rating: number
  productId: string
}

export type argType = {
  [key: string]: any
}