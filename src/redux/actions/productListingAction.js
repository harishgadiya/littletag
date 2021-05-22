import { productTypes } from '../reducers/productListingReducers';
import firebase from '../../config/firebase-config';

export const fetchProductSuccess = (data) => {
  console.log(data, 'sjflkasjfdasjflajdl;fdajsldfjs');
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
    console.log(products, '>>>>>>>');
    // setProductList(products['-Ma-62BeEXyOeArByzTg']);
    dispatch(fetchProductSuccess(products['-Ma-62BeEXyOeArByzTg']));
  });
};

// export const fetchProducts = () => ({
//   type: productTypes.FETCH_PRODUCTS,
// });

export default fetchProducts;
