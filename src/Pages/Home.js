import React from 'react';
import { Container } from '../components/atoms';
import { CategoryProducts, Hero, TrendingProducts } from '../components/organisms';

const Home = () => {
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
