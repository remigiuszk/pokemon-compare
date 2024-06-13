import { combineReducers } from "redux";
import wishlist from "./wishlistReducer";
import pokemon from "./pokemonReducer";

const rootReducer = combineReducers({
  wishlist,
  pokemon
});

export default rootReducer;