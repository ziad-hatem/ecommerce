import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";
import userAddressesReducer from "./userAddressesReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allProducts: productsReducer,
  authReducer: authReducer,
  userAddressesReducer: userAddressesReducer,
});
