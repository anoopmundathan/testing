import { POST_COMMENT } from "../actions/types";

export const comment = (state = [], action) => {
  switch(action.type) {
    case POST_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
