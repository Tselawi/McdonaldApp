import { combineReducers } from "redux";
import CardItems from "./reducer";
import productReducer from "./stores";
import orderReducer from "./orders";

export default combineReducers({
  CardItems,
  productReducer,
  orderReducer,
});
