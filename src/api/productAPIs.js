import { firebaseDB } from '../config/firebase-config';
import { cleanCheckoutProducts, getAllCheckoutProduct } from '../redux/actions/checkoutActions';
import { getWishlistCartInfoWithProducts } from '../redux/actions/productListingAction';
import { getPlacedOrderDetails } from '../redux/actions/userActions';
import { getAllWishlistProduct } from '../redux/actions/wishlistActions';
import { setOrderDetails, fetchOrders } from '../redux/actions/orderActions';
import { addDaysToDate, cleanObject } from '../utils/common';
import { DB_TABLE_NAMES, DELIVERY_DATE_OFFSET } from '../utils/constants';
import { errorFn } from './commonAPIs';

export const carts = firebaseDB.child(DB_TABLE_NAMES.CARTS);
export const wishlists = firebaseDB.child(DB_TABLE_NAMES.WISHLISTS);
export const orders = firebaseDB.child(DB_TABLE_NAMES.ORDERS);
export const products = firebaseDB.child(DB_TABLE_NAMES.PRODUCTS); //.child('-Ma-62BeEXyOeArByzTg');

export const addProductToCart = (dispatch, userId, data) => {
  if (userId) {
    carts.child(userId).once('value', (snapshot) => {
      const checkoutData = snapshot.val();
      if (checkoutData) {
        const cartProducts = Object.keys(checkoutData).map((key) => ({
          ...checkoutData[key],
          id: key,
        }));
        const dbCartProduct = cartProducts.find((item) => item?.productId == data?.productId);
        if (dbCartProduct) {
          updateProductQuantityInCart(userId, dbCartProduct.id, dbCartProduct.productId, dbCartProduct.quantity + 1);
          return;
        }
      }
      carts
        .child(userId)
        .push(data, errorFn)
        .then(() => {
          userId && getWishlistProducts(dispatch, userId);
        });
    });
  }
};

export const getCartProducts = (dispatch, userId) => {
  userId &&
    carts.child(userId).on('value', (snapshot) => {
      let productsDetails = [];
      const checkoutData = snapshot.val();
      if (checkoutData) {
        const cartProducts = Object.keys(checkoutData).map((key) => ({
          ...checkoutData[key],
          id: key,
        }));
        products.on('value', (productsSanpshot) => {
          const productData = productsSanpshot.val();
          if (productData) {
            const products = Object.keys(productData).map((key) => ({
              ...productData[key],
              // id: key,
            }));
            productsDetails = cartProducts?.map((item) => {
              if (products?.filter((x) => x?.id?.toString() === item?.productId?.toString())) {
                return {
                  product: {
                    ...products?.find((x) => x?.id?.toString() === item?.productId?.toString()),
                    cartId: item.id,
                    selectedSize: item.selectedSize,
                  },
                  quantity: item.quantity,
                  deliveryDate: addDaysToDate(DELIVERY_DATE_OFFSET),
                };
              }
            });
          }
          dispatch(
            getAllCheckoutProduct({
              userId,
              productItems: productsDetails,
              productCount: productsDetails?.length || 0,
            }),
          );
        });
      } else {
        dispatch(
          getAllCheckoutProduct({
            userId,
            productItems: productsDetails,
            productCount: productsDetails?.length || 0,
          }),
        );
      }
    });
};

export const removeProductFromCart = (userId, cartId) => {
  cartId && userId && carts.child(`${userId}/${cartId}`).remove(errorFn);
};

export const updateProductQuantityInCart = (userId, cartId, productId, quantity) => {
  cartId && userId && carts.child(`${userId}/${cartId}`).set({ productId, quantity }, errorFn);
};

export const addProductToWishlist = (dispatch, userId, data) => {
  userId &&
    wishlists
      .child(userId)
      .push(cleanObject(data), errorFn)
      .then(() => {
        userId && getWishlistProducts(dispatch, userId);
      });
};

export const getOrderDetails = (dispatch, userId) => {
  dispatch(fetchOrders());
  orders.once('value', (snapshot) => {
    const orders = snapshot.val();
    orders && userId ? dispatch(setOrderDetails(orders[userId])) : dispatch(setOrderDetails({}));
    // dispatch(fetchProductSuccess(products['-Ma-62BeEXyOeArByzTg']));
  });
};

export const getWishlistProducts = (dispatch, userId) => {
  userId &&
    wishlists.child(userId).on('value', (snapshot) => {
      let productsDetails = [];
      const wishlistData = snapshot.val();
      if (wishlistData) {
        const wishlistProducts = Object.keys(wishlistData).map((key) => ({
          ...wishlistData[key],
          id: key,
        }));
        products.on('value', (productsSanpshot) => {
          const productData = productsSanpshot.val();
          if (productData) {
            const products = Object.keys(productData).map((key) => ({
              ...productData[key],
              // id: key,
            }));
            productsDetails = wishlistProducts?.map((item) => {
              if (products?.filter((x) => x?.id?.toString() === item?.productId?.toString())) {
                return {
                  product: products?.find((x) => x?.id?.toString() === item?.productId?.toString()),
                  wishlistId: item.id,
                };
              }
            });
          }
          dispatch(
            getAllWishlistProduct({
              userId,
              productItems: productsDetails,
              productCount: productsDetails?.length || 0,
            }),
          );
        });
      } else {
        dispatch(
          getAllWishlistProduct({
            userId,
            productItems: productsDetails,
            productCount: productsDetails?.length || 0,
          }),
        );
      }
    });
};

export const removeProductFromWishlist = (dispatch, userId, wishlistId, isUpdateProducts) => {
  wishlistId &&
    userId &&
    wishlists
      .child(`${userId}/${wishlistId}`)
      .remove(errorFn)
      .then(() => {
        userId && isUpdateProducts && getWishlistCartInfoWithProducts(dispatch, userId);
        userId && getWishlistProducts(dispatch, userId);
      });
};

export const proceedToCheckout = (
  dispatch,
  userId,
  checkoutId,
  paymentResponse,
  selectedAddress,
  selectedAddressDetails,
  totalItems,
  totalPrice,
  deliverBy,
  cartProducts,
) => {
  return new Promise((resolve, reject) => {
    if (userId && checkoutId && cartProducts) {
      const date = new Date();
      orders
        .child(`${userId}/${checkoutId}`)
        .set(
          cleanObject({
            products: cartProducts,
            deliveryAddress: selectedAddress,
            paymentStatus: 'Successful',
            date: date.toJSON(),
            deliverBy: deliverBy.toJSON(),
            paymentId: paymentResponse?.razorpay_payment_id,
            orderId: paymentResponse?.razorpay_order_id,
            paymentSignature: paymentResponse?.razorpay_signature,
          }),
          (error) => reject(typeof error === 'object' ? JSON.stringify(error) : error),
        )
        .then(() => {
          carts
            .child(userId)
            .remove(errorFn)
            .then(() => {
              dispatch(
                getPlacedOrderDetails({
                  totalItems,
                  totalPrice,
                  selectedAddressDetails,
                  deliverBy,
                }),
              );
              dispatch(cleanCheckoutProducts());
              resolve('successful placed order');
            });
        })
        .catch((err) => reject(err));
    }
  });
};
