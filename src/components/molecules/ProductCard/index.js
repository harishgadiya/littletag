import { Body, Button, Card, Icon, Image, Price, Tag, Title } from '../../atoms';
import './index.scss';

const ProductCard = ({ type, iconName = 'heart', button1, button2 }) => {
  return (
    <Card className='product-card'>
      <div className='image-area'>
        <Image
          className='product-image'
          {...{ src: 'https://picsum.photos/seed/picsum/260/325', alt: 'pics' }}
        />
        <div className='offer-price-wishlist'>
          <Tag className='offer-price' {...{ text: '- 36 %' }} />
          <Icon name={iconName} />
        </div>
      </div>
      <div className='description-area'>
        <Title {...{ text: 'Product Title' }} />
        <Body {...{ text: 'product descript thinks' }} />
        <Price {...{ currentPrice: '350', previousPrice: '430' }} />
        {type !== 'trending' && (
          <div className='action-buttons'>
            <Button {...{ text: button1?.text || 'Add to cart', type: 'outline' }} />
            <Button {...{ text: button2?.text || 'Buy now' }} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
