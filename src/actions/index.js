import { POST_COMMENT } from "./types";

export const postComment = (comment) => {
  return {
    type: POST_COMMENT,
    payload: comment
  }
}
