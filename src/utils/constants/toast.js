const common = {
  autoDismiss: true,
  autoDismissTimeout: 2000,
  transitionDuration: 500,
};

export const TOAST_TYPE = {
  SUCCESS: { appearance: 'success', ...common },
  ERROR: { appearance: 'error', ...common },
  WARNING: { appearance: 'warning', ...common },
  INFO: { appearance: 'info', ...common },
};

export const TOAST_TEXT = {
  PRODUCT_ALREADY_IN_WISHLIST: 'This product is already in wishlist.',
  ADD_PRODUCT_IN_WISHLIST: 'Product is added to wishlist.',
  REMOVED_PRODUCT_FROM_WISHLIST: 'Product is removed from wishlist.',

  REMOVED_PRODUCT_IN_CART: 'Product is removed from cart.',
  ADDED_PRODUCT_FROM_CART: 'Product is added from cart.',
  BUY_NOW: 'Please proceed.',

  MAX_PRODUCT_COUNT_IN_CART: 'Maximum product count would be 3 cart.',
  MIN_PRODUCT_COUNT_IN_CART: 'Minimum product count would be 1 cart.',
  PRODUCT_COUNT_INCREASED_IN_CART: 'product count increased by 1 in cart.',
  PRODUCT_COUNT_DECREASED_IN_CART: 'Product count decreased by 1 in cart.',

  USER_DETAILS_UPDATED_SUCCESSFULLY: 'User details updated successfully.',
};
