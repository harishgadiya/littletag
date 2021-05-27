import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistProducts } from '../api/productAPIs';
import { Container } from '../components/atoms';
import { TrendingProducts } from '../components/organisms';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { productItems, userId } = useSelector((state) => ({ ...state.wishlist, userId: state.user.id }));

  useEffect(() => {
    getWishlistProducts(dispatch, userId);
  }, []);
  console.log('productItems => ', productItems);
  const listingCard = {
    heading: `My Wishlist (${productItems?.length || 0})`,
    cards: productItems?.map((item) => ({
      ...item,
      type: 'wishlist',
      iconName: 'wishlist',
      button1: { text: 'Add to cart' },
      button2: { text: 'Remove' },
    })) || [{ type: 'wishlist', iconName: 'wishlist', button1: { text: 'Add to cart' }, button2: { text: 'Remove' } }],
  };
  return (
    <Container className="listing-product">
      <TrendingProducts {...listingCard} />
    </Container>
  );
};

export default Wishlist;
