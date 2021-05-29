import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../api/productAPIs';
import { fetchUser } from '../../api/userAPIs';
import { Container } from '../../components/atoms';
import PriceDetailCard from '../../components/molecules/PriceDetailCard';
import { CheckoutProducts } from '../../components/organisms';
import './checkout.scss';

const Checkout = () => {
  const dispatch = useDispatch();
  const { productItems, userId, addressList } = useSelector((state) => ({
    ...state.checkout,
    userId: state?.user?.id,
    addressList: state?.user?.addressList,
  }));

  useEffect(() => {
    userId && getCartProducts(dispatch, userId);
    fetchUser(dispatch);
  }, [dispatch, userId]);

  const checkoutProducts = {
    heading: `My cart (${productItems?.length || 0})`,
    products: productItems ? [...productItems] : [],
  };

  const price = productItems?.reduce(
    (acc, current) => acc + parseInt(current?.product?.price) * parseInt(current?.quantity),
    0,
  );
  return (
    <Container className="checkout">
      <div className="product-section">
        <CheckoutProducts {...checkoutProducts} {...{ userId, addressList }} />
      </div>
      <div className="price-section">
        <PriceDetailCard {...{ price, deliveryCharge: (productItems?.length || 0) * 50 }} />
      </div>
    </Container>
  );
};

export default Checkout;
