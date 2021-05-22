import { Button, Card, Price, Title } from '../../atoms';

import './priceDetailCard.scss';

const PriceDetailCard = () => {
  return (
    <Card className='price-detail-card'>
      <Title {...{ text: 'Price Detail' }} />
      <div className='price-detail-section'>
        <div className='price-detail'>
          <h5>Price</h5>
          <Price {...{ currentPrice: 3005 }} />
        </div>
        <div className='price-detail'>
          <h5>Discount</h5>
          <Price {...{ currentPrice: 300 }} />
        </div>
        <div className='price-detail'>
          <h5>Delivery Charges</h5>
          <Price {...{ currentPrice: 100 }} />
        </div>
        <div className='price-detail'>
          <h5>Total Price</h5>
          <Price {...{ currentPrice: 2805 }} />
        </div>
        <Button {...{ text: 'Proceed to pay' }} />
      </div>
    </Card>
  );
};

export default PriceDetailCard;
