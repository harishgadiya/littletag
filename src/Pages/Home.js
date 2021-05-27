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
    heading: 'Shop by brands',
    cards: [
      {
        image:
          'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/26/6b430ac0-d462-4221-a69d-aa8eef98f0b21622024537911-Sports-shoes--1-.jpg',
        link: 'listing?brand=puma',
      },
      {
        image:
          'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg',
        link: '/listing?brand=nike',
      },
      {
        image:
          'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/26/7ff94af3-857c-4b93-86ac-7cec397dd7851622024429489-men---s-activewear.jpg',
        link: '/listing?brand=rebook',
      },
      {
        image:
          'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg',
        link: '/listing?brand=nike',
      },
    ],
  };

  const menCategoryProducts = {
    heading: 'CATEGORIES TO BAG',
    cards: [{}, {}, {}],
  };

  const womenCategoryProducts = {
    heading: 'Women',
    cards: [{}, {}, {}, {}],
  };
  return (
    <>
      <Hero />
      <Container>
        <CategoryProducts {...trendingProductsInIndeanWear} />
        {/* <CategoryProducts {...menCategoryProducts} /> */}
        {/* <TrendingProducts {...trendingProducts} />
        <CategoryProducts {...womenCategoryProducts} />
        <TrendingProducts {...trendingProductsInIndeanWear} /> */}
      </Container>
    </>
  );
};

export default Home;
