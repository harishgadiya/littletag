import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistProducts } from '../api/productAPIs';
import { Container } from '../components/atoms';
import { TrendingProducts } from '../components/organisms';
import { BUTTON_TEXT, WISHLIST_ICON_NAME, CARD_TYPE } from '../utils/constants/button';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { productItems, userId } = useSelector((state) => ({ ...state.wishlist, userId: state.user.id }));

  useEffect(() => {
    userId && getWishlistProducts(dispatch, userId);
  }, [userId]);

  const listingCard = {
    heading: `My Wishlist (${productItems?.length || 0})`,
    cards: productItems?.map((item) => ({
      ...item,
      userId,
      type: CARD_TYPE.WISHLIST,
      iconName: WISHLIST_ICON_NAME.WISHLIST,
      button1: { text: BUTTON_TEXT.ADD_TO_CART },
      button2: { text: BUTTON_TEXT.REMOVE },
    })),
  };

  return (
    <Container className="listing-product">
      <TrendingProducts {...listingCard} />
    </Container>
  );
};

export default Wishlist;
