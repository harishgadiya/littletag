import { Container } from '../../components/atoms';
import { ProductCard } from '../../components/molecules';

import './index.scss';

const Listing = () => {
  const listingCard = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <Container className='listing-product'>
      <div className='filter-section'></div>
      <div className='products-section'>
        {listingCard.map((item) => (
          <ProductCard />
        ))}
      </div>
    </Container>
  );
};

export default Listing;
