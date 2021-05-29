import { Button, Card, Price, Title } from '../../atoms';

import './priceDetailCard.scss';

const PriceDetailCard = ({ price, discount = 0, deliveryCharge = 0 }) => {
  return (
    <Card className="price-detail-card">
      <Title {...{ text: 'Price Detail' }} />
      <div className="price-detail-section">
        <div className="price-detail">
          <h5>Price</h5>
          <Price {...{ currentPrice: price || 0 }} />
        </div>
        <div className="price-detail">
          <h5>Discount</h5>
          <Price {...{ currentPrice: discount }} />
        </div>
        <div className="price-detail">
          <h5>Delivery Charges</h5>
          <Price {...{ currentPrice: deliveryCharge }} />
        </div>
        <div className="price-detail">
          <h5>Total Price</h5>
          <Price {...{ currentPrice: price + discount + deliveryCharge }} />
        </div>
        <Button {...{ text: 'Proceed to pay' }} />
      </div>
    </Card>
  );
};

export default PriceDetailCard;
