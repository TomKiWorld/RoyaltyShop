export const toggleWishListItem = (wishListItems, wishListItemToToggle) => {
  const existingWishListItem = wishListItems.find(
    wishListItem => wishListItem.id === wishListItemToToggle.id
  );

  return existingWishListItem 
    ? wishListItems.filter(wishListItem => wishListItem.id !== wishListItemToToggle.id)
    : [ ...wishListItems, wishListItemToToggle];
}
