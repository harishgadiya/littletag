import { Button, Card, Price, Title } from '../../atoms';
import './priceDetailCard.scss';

const PriceDetailCard = ({ price, discount = 0, deliveryCharge = 0, proceedToPay, productCount }) => {
  const totalPrice = price + discount + deliveryCharge;

  return (
    <Card className="price-detail-card">
      <Title {...{ text: 'Price Detail' }} />
      <div className="price-detail-section">
        <div className="price-detail my-2">
          <h5>Price</h5>
          <Price {...{ currentPrice: price || 0 }} />
        </div>
        <div className="price-detail my-2">
          <h5>Discount</h5>
          <Price {...{ currentPrice: discount }} />
        </div>
        <div className="price-detail my-2">
          <h5>Delivery Charges</h5>
          <Price {...{ currentPrice: deliveryCharge }} />
        </div>
        <div className="price-detail my-2">
          <h5>Total Price</h5>
          <Price {...{ currentPrice: totalPrice }} />
        </div>
        <Button {...{ text: 'Proceed to pay', onClick: () => proceedToPay(totalPrice), disabled: productCount == 0 }} />
      </div>
    </Card>
  );
};

export default PriceDetailCard;
