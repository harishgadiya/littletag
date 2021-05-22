import { Body, Button, Card, Circle, Image, Price, Tag, Title } from '../../atoms';

import './checkoutCard.scss';

const CheckoutCard = () => {
  return (
    <Card className='checkout-card'>
      <div className='product-detail'>
        <Image className='image' {...{ src: 'https://picsum.photos/seed/picsum/260/325', alt: 'pics' }} />
        <div className='details'>
          <Title {...{ text: 'Product Title' }} />
          <Body {...{ text: 'Size: M' }} />
          <Price {...{ currentPrice: '350' }} />
        </div>
        <div className='delivery'>
          <Body {...{ text: 'Delivery by Web 28 Apr | Rs. 40' }} />
        </div>
      </div>
      <div className='action-btns'>
        <div className='count'>
          <Circle text='-' />
          <Tag className='text' {...{ text: '1' }} />
          <Circle text='+' />
        </div>
        <Button {...{ text: 'Save for later', type: 'outline' }} />
        <Button {...{ text: 'Remove', type: 'outline' }} />
      </div>
    </Card>
  );
};

export default CheckoutCard;
