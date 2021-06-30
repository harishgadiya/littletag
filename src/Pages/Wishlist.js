import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistProducts } from '../api/productAPIs';
import { Container } from '../components/atoms';
import { TrendingProducts } from '../components/organisms';
import { PAGE_NAMES } from '../utils/constants';
import { BUTTON_TEXT, WISHLIST_ICON_NAME, CARD_TYPE } from '../utils/constants/button';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { productItems, userId } = useSelector((state) => ({ ...state.wishlist, userId: state?.user?.id }));

  useEffect(() => {
    userId && getWishlistProducts(dispatch, userId);
  }, [userId]);

  const wishlistCard = {
    heading: `My Wishlist (${productItems?.length || 0})`,
    page: PAGE_NAMES.WISHLIST,
    cards: productItems?.map((item) => ({
      ...item,
      userId,
      type: CARD_TYPE.WISHLIST,
      iconName: WISHLIST_ICON_NAME.WISHLIST,
      button1: { text: BUTTON_TEXT.ADD_TO_CART },
      button2: { text: BUTTON_TEXT.REMOVE },
      pageName: PAGE_NAMES.WISHLIST,
    })),
  };

  return (
    <Container className="listing-product p-1 p-md-2 p-lg-4">
      <TrendingProducts {...wishlistCard} />
    </Container>
  );
};

export default Wishlist;
