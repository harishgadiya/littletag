import { Body, Button, Card, Circle, Image, Price, Tag, Title } from '../../atoms';

import './checkoutCard.scss';

const CheckoutCard = ({ product: { title, price, image }, quantity }) => {
  return (
    <Card className="checkout-card">
      <div className="product-detail">
        <Image className="image" {...{ src: image, alt: 'pics' }} />
        <div className="details">
          <Title {...{ text: title }} />
          <Body {...{ text: 'Size: M' }} />
          <Price {...{ currentPrice: price }} />
        </div>
        <div className="delivery">
          <Body {...{ text: 'Delivery by Web 28 Apr | Rs. 40' }} />
        </div>
      </div>
      <div className="action-btns">
        <div className="count">
          <Circle text="-" />
          <Tag className="text" {...{ text: quantity }} />
          <Circle text="+" />
        </div>
        <Button {...{ text: 'Save for later', type: 'outline' }} />
        <Button {...{ text: 'Remove', type: 'outline' }} />
      </div>
    </Card>
  );
};

export default CheckoutCard;
