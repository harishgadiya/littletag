import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../../components/atoms';
import { CategoryProducts, Hero, TrendingProducts } from '../../components/organisms';

import './home.scss';

const Home = () => {
  const products = useSelector((state) => state.checkout);

  const trendingProducts = {
    heading: 'Trending Products',
    cards: [
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kj4m0sw0-0/kurta/r/m/s/s-322k771-saara-original-imafyrphmmjzey2g.jpeg?q=50',
        title: 'Nakshu',
        description: 'Casual Full Sleeve Printed W',
        price: 449,
        id: 1,
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/k3xcdjk0pkrrdj/shirt/v/k/d/3xl-kaclhs1186-kuons-avenue-kaclhs1186xxxl-original-imafffqxggt6afjy.jpeg?q=50',
        title: 'KUONS AVENUE',
        description: 'Men Slim Fit Washed Mand',
        price: 999,
        id: 2,
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kflftzk0-0/t-shirt/s/z/v/s-t16-seven-rocks-original-imafwyf69sr5wxbn.jpeg?q=50',
        title: 'Seven Rocks',
        description: 'Solid Men Polo Neck Dark',
        price: 404,
        id: 3,
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kd69z0w0/t-shirt/w/v/h/xxl-mss20cn097b-metronaut-original-imafu5fkkbgrbzsa.jpeg?q=50',
        title: 'METRONAUT',
        description: 'Graphic Print Men Round N',
        price: 504,
        id: 4,
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kialrww0-0/shirt/x/p/v/4xl-mfs-11129-k-black-red-mufti-original-imafy4akg7mspgyv.jpeg?q=50',
        title: 'Nakshu',
        description: 'Casual Full Sleeve Printed W',
        price: 449,
        id: 5,
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kit6hzk0-0/shirt/s/3/t/3xl-mfs-10883-k-01-black-mufti-original-imafygqhzjtbbqec.jpeg?q=50',
        title: 'KUONS AVENUE',
        description: 'Men Slim Fit Washed Mand',
        price: 999,
        id: 6,
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/432/518/k6nxrbk0/t-shirt/d/t/p/s-bulati-hai-magar-jane-ka-nahi-02-men-t-shirt-s-mfb-original-imafp2m9vfxrdfam.jpeg?q=70',
        title: 'Seven Rocks',
        description: 'Solid Men Polo Neck Dark',
        price: 404,
        id: 7,
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/880/1056/k5pn6vk0/t-shirt/z/a/e/free-yellow-jo-humse-jale-men-t-shirt-free-mfb-original-imafhqqhfgtvptpy.jpeg?q=50',
        title: 'METRONAUT',
        description: 'Graphic Print Men Round N',
        price: 504,
        id: 8,
      },
    ],
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
      {
        image:
          'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/7726731b-c684-4856-907a-95abe59c41811619162238622-hrx-sports.jpg',
        link: '/listing?brand=rebook',
      },
      {
        image:
          'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg',
        link: '/listing?brand=rebook',
      },
    ],
  };

  const menCategoryProducts = {
    heading: 'Men',
    cards: [
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kd1zngw0/shirt/g/s/p/xl-combo-3-sh-03-04-10-craft-heaven-original-imafuffbzjydmucv.jpeg?q=50',
        link: 'listing?gender=male',
        title: 'Shirts',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/k5h2jrk0/t-shirt/4/c/t/m-bss20cnpk04-billion-original-imafz5p4rtkg2bdk.jpeg?q=50',
        link: 'listing?gender=male',
        title: 'T-Shirts',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/jh6l2fk0/jean/4/a/z/32-lj183a-lzard-original-imaf58839pkyfzke.jpeg?q=50',
        link: 'listing?gender=male',
        title: 'Jeans',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kfmv9u80/short/w/h/x/30-hs-4040-navy-red-vego-original-imafwfgeusgqbufp.jpeg?q=50',
        link: 'listing?gender=male',
        title: 'Shorts',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kkcwo7k0/track-pant/h/2/c/xl-solid-men-black-track-pants-foxter-original-imafzq5fp3jr5ktu.jpeg?q=50',
        link: 'listing?gender=male',
        title: 'Track Pants',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kfoapow0-0/trouser/v/x/5/38-t-130-trouser-baleno-black-aa-ad-av-original-imafw2jugbuxmnq9.jpeg?q=50',
        link: 'listing?gender=male',
        title: 'Trousers',
      },
    ],
  };

  const womenCategoryProducts = {
    heading: 'Women',
    cards: [
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kalecnk0/kurta/g/h/z/m-gc10700petrolgreen-gulmohar-jaipur-original-imafs5f7btku5gna.jpeg?q=50',
        link: 'listing?gender=female',
        title: 'Kurtas & Kurta sets',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kflftzk0-0/sari/o/y/c/free-hitesh2series-fumvel-unstitched-original-imafwypg4fwky3a7.jpeg?q=50',
        link: 'listing?gender=female',
        title: 'Sarees',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kf8kvbk0-0/fabric/2/g/s/yes-unstitched-1196-admiring-navy-rensilafab-original-imafvqnfchhzdxgr.jpeg?q=50',
        link: 'listing?gender=female',
        title: 'Dresses',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/kjq1mkw0-0/short/o/o/z/xxl-mh-womenshort-gnb-mh-mode-original-imafz8cprr7gk7hs.jpeg?q=50',
        link: 'listing?gender=female',
        title: 'Shorts',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/jkwwgi80/gown/k/p/y/na-free-gulkand-1020-trilok-fab-na-original-imaf7y3mv6cyy7zm.jpeg?q=50',
        link: 'listing?gender=female',
        title: 'Gown',
      },
      {
        image:
          'https://rukminim1.flixcart.com/image/580/696/jhmawsw0/lehenga-choli/p/f/a/free-jp-lahenga-niklufashion-original-imaf5kdzyfwcrfwx.jpeg?q=50',
        link: 'listing?gender=female',
        title: 'Lehenga Choli',
      },
    ],
  };

  return (
    <>
      <Hero />
      <Container className="home-page">
        <CategoryProducts {...trendingProductsInIndeanWear} />
        <CategoryProducts {...menCategoryProducts} />
        <CategoryProducts {...womenCategoryProducts} />
        <TrendingProducts {...trendingProducts} />
        {/*<TrendingProducts {...trendingProductsInIndeanWear} /> */}
      </Container>
    </>
  );
};

export default Home;
