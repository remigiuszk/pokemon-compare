import { combineReducers } from "redux";
import wishlist from "./wishlistReducer";
import pokemon from "../../modules/pokemon/reducers/pokemonReducer";

const rootReducer = combineReducers({
  wishlist,
  pokemon
});

export default rootReducer;