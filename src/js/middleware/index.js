import { ADD_ARTICLE } from "../constants/index";
const forbiddenWords = ["ade", "bimpe", "money"];

export function forbiddenMiddlewareWords({ dispatch }) {
  return function(next) {
    return function(action) {

      if (action.type === ADD_ARTICLE) {
        const SpamWords = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (SpamWords.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }

      return next(action);
    };
  };
}
