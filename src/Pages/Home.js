import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../components/atoms';
import {
  CategoryProducts,
  Hero,
  TrendingProducts,
} from '../components/organisms';
import { addProductToCheckout } from '../redux/actions/checkoutActions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProductToCheckout());
  }, []);

  const products = useSelector((state) => state.checkout);
  console.log(`Products from store: ${JSON.stringify(products)}`);

  const trendingProducts = {
    heading: 'Trending Products',
    cards: [{}, {}, {}, {}, {}, {}, {}, {}],
  };

  const trendingProductsInIndeanWear = {
    heading: 'Trending in Indian wear',
    cards: [{}, {}, {}, {}],
  };

  const menCategoryProducts = {
    heading: 'Men',
    cards: [{}, {}, {}, {}, {}, {}, {}, {}],
  };

  const womenCategoryProducts = {
    heading: 'Women',
    cards: [{}, {}, {}, {}],
  };
  return (
    <>
      <Hero />
      <Container>
        <TrendingProducts {...trendingProducts} />
        <CategoryProducts {...menCategoryProducts} />
        <CategoryProducts {...womenCategoryProducts} />
        <TrendingProducts {...trendingProductsInIndeanWear} />
      </Container>
    </>
  );
};

export default Home;
