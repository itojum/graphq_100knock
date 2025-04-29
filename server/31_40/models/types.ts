export type CategoryType = {
  id: string
  name: string
}

export type ProductType = {
  id: string
  name: string
  description: string
  price: number
  categoryId: string
}

export type ReviewType = {
  id: string
  content: string
  rating: number
  productId: string
}

export type argType = {
  [key: string]: any
}