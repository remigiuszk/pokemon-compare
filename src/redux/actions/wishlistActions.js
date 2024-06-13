import * as types from "./actionTypes";

export function createWishlistEntry(wishlistEntry) {
  return { type: types.CREATE_WISHLIST_ENTRY, wishlistEntry };
}
