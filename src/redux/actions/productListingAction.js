import { productTypes } from '../reducers/productListingReducers';
import firebase from '../../config/firebase-config';

import { wishlist, products, cart } from '../../api/productAPIs';

export const fetchProductSuccess = (data) => {
  return {
    type: productTypes.FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

const fetchProductsLoading = () => ({
  type: productTypes.FETCH_PRODUCTS,
});

const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsLoading());

  const productRef = firebase.database().ref('products');
  productRef.on('value', (snapshot) => {
    const products = snapshot.val();
    // setProductList(products['-Ma-62BeEXyOeArByzTg']);
    dispatch(fetchProductSuccess(products['-Ma-62BeEXyOeArByzTg']));
  });
};

// export const fetchProducts = () => ({
//   type: productTypes.FETCH_PRODUCTS,
// });

export default fetchProducts;

export const getWishlistCartInfoWithProducts = (dispatch, userId) => {
  products.on('value', (productSnapshot) => {
    if (productSnapshot.val() !== null) {
      let productsData = productSnapshot.val();
      wishlist.child(userId).on('value', (wishlistSnapshot) => {
        if (wishlistSnapshot.val() !== null) {
          const wishlistData = wishlistSnapshot.val();
          const wishlistProducts = Object.keys(wishlistData).map((key) => ({
            ...wishlistData[key],
            id: key,
          }));
          productsData = productsData?.map((item) => {
            if (wishlistProducts?.some((x) => x?.productId.toString() === item?.id?.toString())) {
              item.isAddedInWishlist = true;
            }
            return item;
          });
        }
        cart.child(userId).on('value', (cartSnapshot) => {
          if (cartSnapshot.val() !== null) {
            const checkoutData = cartSnapshot.val();
            const cartProducts = Object.keys(checkoutData).map((key) => ({
              ...checkoutData[key],
              id: key,
            }));
            productsData = productsData?.map((item) => {
              if (cartProducts?.some((x) => x?.productId.toString() === item?.id?.toString())) {
                item.isAddedInCheckout = true;
              }
              return item;
            });
          }
          dispatch(fetchProductSuccess(productsData));
        });
      });
    }
  });
};
