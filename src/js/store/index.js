import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenMiddlewareWords } from "../middleware";

const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenMiddlewareWords)
  );

store.subscribe(()=>console.log(store.getState()));

export default store;