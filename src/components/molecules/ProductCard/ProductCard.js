import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addProductToCart, addProductToWishlist } from '../../../api/productAPIs';
import { Body, Button, Card, Icon, Image, Price, Tag, Title } from '../../atoms';
import './productCard.scss';

const ProductCard = ({ type, iconName = 'heart', button1, button2 }) => {
  return (
    <Card className="product-card">
      <div className="image-area">
        <Image className="product-image" {...{ src: 'https://picsum.photos/seed/picsum/260/325', alt: 'pics' }} />
        <div className="offer-price-wishlist">
          <Tag className="offer-price" {...{ text: '- 36 %' }} />
          <Icon name={iconName} />
        </div>
      </div>
      <div className="description-area">
        <Title {...{ text: 'Product Title' }} />
        <Body {...{ text: 'product descript thinks' }} />
        <Price {...{ currentPrice: '350', previousPrice: '430' }} />
        {type !== 'trending' && (
          <div className="action-buttons">
            <Button {...{ text: button1?.text || 'Add to cart', type: 'outline' }} />
            <Button {...{ text: button2?.text || 'Buy now' }} />
          </div>
        )}
      </div>
    </Card>
  );
};

export const ProductCard1 = ({
  type,
  iconName = 'heart',
  button1,
  button2,
  category,
  id,
  image,
  description,
  price,
  title,
  userId,
  className,
}) => {
  const [favIconName, setFavIconName] = useState(iconName);

  const onAddToCartHandler = () => {
    addProductToCart(userId, {
      productId: id,
      quantity: 1,
    });
  };
  const onFavIconClickHandler = () => {
    setFavIconName((prev) => (prev === 'heart' ? 'wishlist' : 'heart'));
    addProductToWishlist(userId, {
      productId: id,
    });
  };

  return (
    <Card className={`product-card ${className}`}>
      <div className="image-area">
        <Link to={`productdetail/${id - 1}`}>
          <Image className="product-image" {...{ src: image, alt: 'pics' }} />
        </Link>

        <div className="offer-price-wishlist">
          <Tag className="offer-price" {...{ text: '- 36 %' }} />
          <Icon name={favIconName} onClick={onFavIconClickHandler} />
        </div>
      </div>
      <div className="description-area">
        <Title {...{ text: title }} />
        <Body {...{ text: description }} />
        <Price {...{ currentPrice: price, previousPrice: price }} />
        {type !== 'trending' && (
          <div className="action-buttons">
            <Button {...{ text: button1?.text || 'Add to cart', type: 'outline', onClick: onAddToCartHandler }} />
            <Button {...{ text: button2?.text || 'Buy now' }} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
