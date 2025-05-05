import { ReviewType } from "../models/types.ts";

type SortBy = 'RATING_ASC' | 'RATING_DESC';

export const sortByRating = (reviews: ReviewType[], sortBy: SortBy) => {
  if (sortBy === 'RATING_ASC') {
    return reviews.sort((a, b) => a.rating - b.rating);
  } else if (sortBy === 'RATING_DESC') {
    return reviews.sort((a, b) => b.rating - a.rating);
  }
  return reviews;
}