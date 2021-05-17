import { Container } from '../components/atoms';
import { TrendingProducts } from '../components/organisms';

const Wishlist = () => {
  const listingCard = {
    heading: 'My Wishlist (8)',
    cards: [
      {
        type: 'wishlist',
        iconName: 'wishlist',
        button1: { text: 'Add to cart' },
        button2: { text: 'Remove' },
      },
      {
        type: 'wishlist',
        iconName: 'wishlist',
        button1: { text: 'Add to cart' },
        button2: { text: 'Remove' },
      },
      {
        type: 'wishlist',
        iconName: 'wishlist',
        button1: { text: 'Add to cart' },
        button2: { text: 'Remove' },
      },
      {
        type: 'wishlist',
        iconName: 'wishlist',
        button1: { text: 'Add to cart' },
        button2: { text: 'Remove' },
      },
      {
        type: 'wishlist',
        iconName: 'wishlist',
        button1: { text: 'Add to cart' },
        button2: { text: 'Remove' },
      },
      {
        type: 'wishlist',
        iconName: 'wishlist',
        button1: { text: 'Add to cart' },
        button2: { text: 'Remove' },
      },
      {
        type: 'wishlist',
        iconName: 'wishlist',
        button1: { text: 'Add to cart' },
        button2: { text: 'Remove' },
      },
      {
        type: 'wishlist',
        iconName: 'wishlist',
        button1: { text: 'Add to cart' },
        button2: { text: 'Remove' },
      },
    ],
  };
  return (
    <Container className='listing-product'>
      <TrendingProducts {...listingCard} />
    </Container>
  );
};

export default Wishlist;
