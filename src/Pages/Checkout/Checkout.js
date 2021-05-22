import { Container } from '../../components/atoms';
import PriceDetailCard from '../../components/molecules/PriceDetailCard';
import { CheckoutProducts } from '../../components/organisms';
import './checkout.scss';

const Checkout = () => {
  const checkoutProducts = {
    heading: 'My cart (4)',
    products: [{}, {}, {}, {}],
  };
  return (
    <Container className='checkout'>
      <div className='product-section'>
        <CheckoutProducts {...checkoutProducts} />
      </div>
      <div className='price-section'>
        <PriceDetailCard />
      </div>
    </Container>
  );
};

export default Checkout;
