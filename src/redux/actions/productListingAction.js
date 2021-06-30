import { productTypes } from '../reducers/productListingReducers';
import firebase from '../../config/firebase-config';

import { wishlists, products, carts } from '../../api/productAPIs';
import { getPercentage } from '../../utils/common';

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
    //dispatch(fetchProductSuccess(products['-Ma-62BeEXyOeArByzTg']));
    dispatch(fetchProductSuccess(products));
  });
};

// export const fetchProducts = () => ({
//   type: productTypes.FETCH_PRODUCTS,
// });

export default fetchProducts;

export const getWishlistCartInfoWithProducts = (dispatch, userId) => {
  dispatch(fetchProductsLoading());
  products.on('value', (productSnapshot) => {
    let productsData = productSnapshot.val();
    if (productsData && userId) {
      wishlists.child(userId).on('value', (wishlistSnapshot) => {
        const wishlistData = wishlistSnapshot.val();
        if (wishlistData) {
          const wishlistProducts = Object.keys(wishlistData).map((key) => ({
            ...wishlistData[key],
            id: key,
          }));
          productsData = productsData?.map((item) => {
            const wishlistProduct = wishlistProducts?.filter((x) => x?.productId.toString() === item?.id?.toString());
            if (wishlistProduct?.length > 0) {
              item.isAddedInWishlist = true;
              item.wishlistId = wishlistProduct[0].id;
            }
            return item;
          });
        }
        carts.child(userId).on('value', (cartSnapshot) => {
          const checkoutData = cartSnapshot.val();
          if (checkoutData) {
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
          productsData = productsData?.map((product) => {
            if (product?.price && product?.prevPrice) {
              product.offerPercentage = getPercentage(product?.price, product?.prevPrice);
            }
            return product;
          });
          dispatch(fetchProductSuccess(productsData));
        });
      });
    }
    dispatch(fetchProductSuccess(productsData));
  });
};
