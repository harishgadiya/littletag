import { useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Container } from '../../components/atoms';
import { ProductCardItems } from '../../components/molecules/ProductCard';
import { Filters } from '../../components/organisms';
import fetchProducts, { getWishlistCartInfoWithProducts } from '../../redux/actions/productListingAction';
import queryString from 'query-string';

import './listing.scss';

const Listing = (props) => {
  const { productList, loading, genderFilter, selectedBrand, user, dispatch } = props;
  const { search } = useLocation();
  const values = queryString.parse(search);

  let filteredProducts = productList.products;
  // if (genderFilter || selectedBrand) {
  //   filteredProducts = productList.products.filter(
  //     (product) =>
  //       product.gender.toLowerCase() === genderFilter ||
  //       product.brand.toLowerCase() === selectedBrand,
  //   );
  // }
  const filterKeys = Object.keys(values);
  if (filterKeys.length) {
    const productList = [];
    filteredProducts = filteredProducts.filter((product) => {
      if (
        product.gender.toLowerCase() === values.gender ||
        (values.sTerm && product.title.toLowerCase().includes(values.sTerm.split(' ')[0].toLowerCase())) ||
        (values.brand && values.brand.split(',').indexOf(product.brand.toLowerCase()) > -1) ||
        (values.color && values.color.split(',').indexOf(product.color.toLowerCase()) > -1) ||
        (values.rating && values.rating.split(',').indexOf(product.rating.toString()) > -1)
      ) {
        productList.push(product);
        return product;
      }
      // else if (product.brand.toLowerCase() === values.brand) {
      //   productList.push(product);
      //   return product;
      // }
    });
  }

  useEffect(() => {
    props.onAction();
  }, []);

  useEffect(() => {
    if (user?.id) {
      getWishlistCartInfoWithProducts(dispatch, user?.id);
    }
  }, [user?.id]);

  if (loading) {
    return (
      <div className="spin-center">
        <Spinner animation="border" />
      </div>
    );
  }
  console.log('filteredProducts => ', filteredProducts);
  return (
    <Container className="listing-product">
      <div className="filter-section">
        <Filters />
        {/* <Button type="link" text="Clear" onClick={clearFilter} /> */}
      </div>
      <div className="products-section row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCardItems
              key={item.id}
              className="col-lg-3"
              {...item}
              {...{
                userId: user?.id,
              }}
            />
          ))
        ) : (
          <h2>No Result found</h2>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state?.products,
    loading: state.products.loading,
    genderFilter: state.filterReducer.gender,
    selectedBrand: state.filterReducer.brand,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAction: () => dispatch(fetchProducts()),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Listing));
