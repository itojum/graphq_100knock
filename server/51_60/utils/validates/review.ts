import { GraphQLError } from "graphql";
import { ReviewType } from "../../models/types.ts";

export const validateReview = (review: ReviewType) => {
  if(review.rating < 1 || review.rating > 5) {
    throw new GraphQLError("評価は1から5の間でなければなりません。");
  }
  if(review.content.length < 5) {
    throw new GraphQLError("レビューは5文字以上でなければなりません。");
  }
}