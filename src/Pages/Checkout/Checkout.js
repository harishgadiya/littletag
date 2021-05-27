import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../api/productAPIs';
import { Container } from '../../components/atoms';
import PriceDetailCard from '../../components/molecules/PriceDetailCard';
import { CheckoutProducts } from '../../components/organisms';
import './checkout.scss';

const Checkout = () => {
  const dispatch = useDispatch();
  const { productItems, userId } = useSelector((state) => ({ ...state.checkout, userId: state.user.id }));

  useEffect(() => {
    getCartProducts(dispatch, userId);
  }, []);
  const checkoutProducts = {
    heading: `My cart (${productItems?.length || 0})`,
    products: [...productItems],
  };
  return (
    <Container className="checkout">
      <div className="product-section">
        <CheckoutProducts {...checkoutProducts} />
      </div>
      <div className="price-section">
        <PriceDetailCard />
      </div>
    </Container>
  );
};

export default Checkout;
