import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const wishlistReducer = (state = initialState.wishlist, action) => {
  switch (action.type) {
    case types.CREATE_WISHLIST_ENTRY:
      return [...state, { ...action.wishlistEntry }];
    default:
      return state;
  }
};

export default wishlistReducer;