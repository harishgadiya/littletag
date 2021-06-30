import { useToasts } from 'react-toast-notifications';
import { removeProductFromCart, updateProductQuantityInCart } from '../../../api/productAPIs';
import { getDateInFormat } from '../../../utils/common';
import { TOAST_TEXT, TOAST_TYPE } from '../../../utils/constants/toast';
import { Body, Button, Card, Circle, Image, Price, Tag, Title } from '../../atoms';

import './checkoutCard.scss';

const CheckoutCard = ({
  product: { id = null, title, price, image, cartId, selectedSize },
  quantity,
  userId,
  deliveryDate,
  className,
}) => {
  const { addToast } = useToasts();
  const productCount = parseInt(quantity);
  const onRemoveClickHandler = () => {
    removeProductFromCart(userId, cartId);
    addToast(TOAST_TEXT.REMOVED_PRODUCT_FROM_CART, TOAST_TYPE.WARNING);
  };

  const onProductCountHandler = (type) => {
    if (type === '+') {
      if (productCount < 3) {
        userId && cartId && id && updateProductQuantityInCart(userId, cartId, id, productCount + 1);
        addToast(TOAST_TEXT.PRODUCT_COUNT_INCREASED_IN_CART, TOAST_TYPE.SUCCESS);
      } else {
        addToast(TOAST_TEXT.MAX_PRODUCT_COUNT_IN_CART, TOAST_TYPE.WARNING);
      }
    } else {
      if (productCount > 1) {
        userId && cartId && id && updateProductQuantityInCart(userId, cartId, id, productCount - 1);
        addToast(TOAST_TEXT.PRODUCT_COUNT_DECREASED_IN_CART, TOAST_TYPE.WARNING);
      } else {
        addToast(TOAST_TEXT.MIN_PRODUCT_COUNT_IN_CART, TOAST_TYPE.WARNING);
      }
    }
  };
  return (
    <Card className={`checkout-card ${className}`}>
      <div className="product-detail">
        <Image className="image" {...{ src: image, alt: 'pics' }} />
        <div className="details">
          <Title {...{ text: title }} />
          <Body {...{ text: `Size: ${selectedSize}` }} />
          <Price {...{ currentPrice: price }} />
        </div>
        <div className="delivery">
          <Body {...{ text: `Delivery by ${getDateInFormat(deliveryDate, 'ddd, DD MMM YYYY')}` }} />
        </div>
      </div>
      <div className="action-btns">
        <div className="count">
          <Circle text="-" onClick={() => onProductCountHandler('-')} />
          <Tag className="text" {...{ text: productCount }} />
          <Circle text="+" onClick={() => onProductCountHandler('+')} />
        </div>
        <Button {...{ text: 'Save for later', type: 'outline', disabled: true }} />
        <Button {...{ text: 'Remove', type: 'outline', onClick: onRemoveClickHandler }} />
      </div>
    </Card>
  );
};

export default CheckoutCard;
