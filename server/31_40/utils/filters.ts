import { Product, Review } from "../models/types.ts";

type reviewsFilterInput = {
  minRating?: number;
}

type productsFilterInput = {
  minPrice?: number;
  maxPrice?: number;
}

export const filterReviews = (reviewsList: Review[], filter: reviewsFilterInput) =>  {
  if (!filter) return reviewsList;
  
  const { minRating } = filter;
  return reviewsList.filter(review => {
    if (minRating && review.rating < minRating) return false;
    return true;
  });
}

export const filterProducts = (productsList: Product[], filter: productsFilterInput) => {
  if (!filter) return productsList;

  const { minPrice, maxPrice } = filter;
  
  return productsList.filter(product => {
    if (minPrice && product.price < minPrice) return false;
    if (maxPrice && product.price > maxPrice) return false;
    return true;
  });
}