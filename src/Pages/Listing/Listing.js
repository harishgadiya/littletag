import { useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Container } from '../../components/atoms';
import { ProductCardItems } from '../../components/molecules/ProductCard';
import { Filters } from '../../components/organisms';
import fetchProducts from '../../redux/actions/productListingAction';
import queryString from 'query-string';

import './listing.scss';

const Listing = (props) => {
  const { productList, loading, genderFilter, selectedBrand } = props;
  const { search } = useLocation();
  const values = queryString.parse(search);
  console.log(search, 'helesljfklds', values);

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
        (values.brand &&
          values.brand
            .split(',')
            .indexOf(product.brand.toLowerCase()) > -1)
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

  if (loading) {
    return (
      <div className="spin-center">
        <Spinner animation="border" />;
      </div>
    );
  }

  return (
    <Container className="listing-product">
      <div className="filter-section">
        <Filters />
      </div>
      <div className="products-section">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCardItems key={item.id} {...item} />
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
    productList: state.products,
    loading: state.products.loading,
    genderFilter: state.filterReducer.gender,
    selectedBrand: state.filterReducer.brand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAction: () => dispatch(fetchProducts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Listing));
