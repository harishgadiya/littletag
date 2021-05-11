import { Body, Button, Card, Icon, Image, Price, Tag, Title } from '../../atoms';
import './index.scss';

const ProductCard = () => {
  return (
    <Card className='product-card'>
      <div className='image-area'>
        <Image
          className='product-image'
          {...{ src: 'https://picsum.photos/seed/picsum/260/325', alt: 'pics' }}
        />
        <div className='offer-price-wishlist'>
          <Tag className='offer-price' {...{ text: '- 36 %' }} />
          <Icon name='heart' />
        </div>
      </div>
      <div className='description-area'>
        <Title {...{ text: 'Product Title' }} />
        <Body {...{ text: 'product descript thinks' }} />
        <Price {...{ currentPrice: '350', previousPrice: '430' }} />
        <div className='action-buttons'>
          <Button {...{ text: 'Add to cart', type: 'outline' }} />
          <Button {...{ text: 'Buy now' }} />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
