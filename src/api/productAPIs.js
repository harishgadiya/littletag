import { firebaseDB } from '../config/firebase-config';
import { getAllCheckoutProduct } from '../redux/actions/checkoutActions';
import { getAllWishlistProduct } from '../redux/actions/wishlistActions';
import { errorFn } from './commonAPIs';

export const cart = firebaseDB.child('cart');
export const wishlist = firebaseDB.child('wishlist');
export const products = firebaseDB.child('products/-Ma-62BeEXyOeArByzTg');

export const addProductToCart = (userId, data) => {
  cart.child(userId).push(data, errorFn);
};

export const getCartProducts = (dispatch, userId) => {
  cart.child(userId).on('value', (snapshot) => {
    if (snapshot.val() !== null) {
      const checkoutData = snapshot.val();
      const cartProducts = Object.keys(checkoutData).map((key) => ({
        ...checkoutData[key],
        id: key,
      }));
      products.on('value', (productsSanpshot) => {
        if (productsSanpshot.val() !== null) {
          const productData = productsSanpshot.val();
          const products = Object.keys(productData).map((key) => ({
            ...productData[key],
            // id: key,
          }));
          const productsDetails = cartProducts?.map((item) => {
            if (products?.filter((x) => x?.id?.toString() === item?.productId?.toString())) {
              return {
                product: {
                  ...products?.find((x) => x?.id?.toString() === item?.productId?.toString()),
                  cartId: item.id,
                },
                quantity: item.quantity,
              };
            }
          });
          dispatch(
            getAllCheckoutProduct({
              userId,
              productItems: productsDetails,
            }),
          );
        }
      });
    }
  });
};

export const removeProductFromCart = (userId, cartId) => {
  cartId && userId && cart.child(`${userId}/${cartId}`).remove(errorFn);
};

export const updateProductQuantityInCart = (userId, cartId, productId, quantity) => {
  cartId && userId && cart.child(`${userId}/${cartId}`).set({ productId, quantity }, errorFn);
};

export const addProductToWishlist = (userId, data) => {
  wishlist.child(userId).push(data, errorFn);
};

export const getWishlistProducts = (dispatch, userId) => {
  wishlist.child(userId).on('value', (snapshot) => {
    if (snapshot.val() !== null) {
      const wishlistData = snapshot.val();
      const wishlistProducts = Object.keys(wishlistData).map((key) => ({
        ...wishlistData[key],
        id: key,
      }));
      products.on('value', (productsSanpshot) => {
        if (productsSanpshot.val() !== null) {
          const productData = productsSanpshot.val();
          const products = Object.keys(productData).map((key) => ({
            ...productData[key],
            // id: key,
          }));
          const productsDetails = wishlistProducts?.map((item) => {
            if (products?.filter((x) => x?.id?.toString() === item?.productId?.toString())) {
              return {
                product: products?.find((x) => x?.id?.toString() === item?.productId?.toString()),
                wishlistId: item.id,
              };
            }
          });
          dispatch(
            getAllWishlistProduct({
              userId,
              productItems: productsDetails,
            }),
          );
        }
      });
    }
  });
};

export const removeProductFromWishlist = (userId, wishlistId) => {
  wishlistId && userId && wishlist.child(`${userId}/${wishlistId}`).remove(errorFn);
};
