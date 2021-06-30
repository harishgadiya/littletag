import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { getCartProducts, proceedToCheckout } from '../../api/productAPIs';
import { fetchUser } from '../../api/userAPIs';
import { Container } from '../../components/atoms';
import PriceDetailCard from '../../components/molecules/PriceDetailCard';
import { CheckoutProducts } from '../../components/organisms';
import { proceedToPayWithRazor } from '../../config/razor-config';
import { sendOrderNotification } from '../../services/sendEmail';
import { TOAST_TEXT, TOAST_TYPE } from '../../utils/constants/toast';
import './checkout.scss';

const Checkout = () => {
  const dispatch = useDispatch();
  const {
    productItems,
    id: userId,
    addressList,
    selectedAddress,
    name,
    email,
    mobileNumber: contact,
    productCount,
  } = useSelector((state) => ({
    ...state?.checkout,
    ...state?.user,
  }));
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    userId && getCartProducts(dispatch, userId);
    fetchUser(dispatch);
  }, [dispatch, userId]);

  const checkoutProducts = {
    heading: `My cart (${productCount})`,
    products: productItems && productItems.length > 0 ? [...productItems] : [],
  };

  const price = productItems?.reduce(
    (acc, current) => acc + parseInt(current?.product?.price) * parseInt(current?.quantity),
    0,
  );

  const proceedToPay = (totalPrice) => {
    if (!addressList) {
      addToast(TOAST_TEXT.NO_SELECTED_ADDRESS, TOAST_TYPE.WARNING);
      history.push('/profile');
      return;
    }
    const orderId = productItems?.[0]?.product?.cartId;

    proceedToPayWithRazor(null, totalPrice, name, email, contact)
      .then((paymentResponse) => {
        sendOrderNotification(
          email,
          name,
          productItems?.map((item) => ({
            name: item?.product?.title,
          })),
        );

        proceedToCheckout(
          dispatch,
          userId,
          orderId,
          paymentResponse,
          selectedAddress,
          addressList?.find((x) => x?.id == selectedAddress),
          productCount,
          totalPrice,
          productItems?.[0].deliveryDate,
          productItems?.map((item) => ({
            productId: item?.product?.id,
            purchasedPrice: item?.product?.price,
            quantity: item?.quantity,
          })),
        );
        addToast(TOAST_TEXT.ORDER_PLACED_SUCCESSFUL, TOAST_TYPE.SUCCESS);
        history.push('/order-successful');
      })
      .catch((error) => {
        addToast(error, TOAST_TYPE.ERROR);
      });
  };

  return (
    <Container className="checkout">
      <div className="product-section">
        <CheckoutProducts {...checkoutProducts} {...{ userId, addressList, dispatch, selectedAddress }} />
      </div>
      <div className="price-section">
        <PriceDetailCard {...{ price, deliveryCharge: (productItems?.length || 0) * 50, proceedToPay, productCount }} />
      </div>
    </Container>
  );
};

export default Checkout;
