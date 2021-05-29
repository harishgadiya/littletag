import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { addProductToCart, addProductToWishlist, removeProductFromWishlist } from '../../../api/productAPIs';
import { BUTTON_TEXT, CARD_TYPE, WISHLIST_ICON_NAME } from '../../../utils/constants/button';
import { TOAST_TEXT, TOAST_TYPE } from '../../../utils/constants/toast';
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
  iconName = WISHLIST_ICON_NAME.HEART,
  button1 = { text: BUTTON_TEXT.ADD_TO_CART },
  button2 = { text: BUTTON_TEXT.BUY_NOW },
  category,
  id,
  image,
  description,
  price,
  title,
  userId,
  className,
  wishlistId,
  isAddedInWishlist,
  isAddedInCheckout,
}) => {
  const [favIconName, setFavIconName] = useState(isAddedInWishlist ? WISHLIST_ICON_NAME.WISHLIST : iconName);
  const { addToast } = useToasts();
  const history = useHistory();

  const onAddToCartHandler = () => {
    if (isAddedInCheckout) {
      history.push('/checkout');
      return;
    }
    addProductToCart(userId, {
      productId: id,
      quantity: 1,
    });
    addToast(TOAST_TEXT.REMOVED_PRODUCT_IN_CART, TOAST_TYPE.SUCCESS);
  };

  const onFavIconClickHandler = (currentIconName) => {
    if (type === CARD_TYPE.WISHLIST) {
      onRemoveFromWishlistHandler();
    } else {
      if (currentIconName === WISHLIST_ICON_NAME.WISHLIST) {
        addToast(TOAST_TEXT.PRODUCT_ALREADY_IN_WISHLIST, TOAST_TYPE.INFO);
        return;
      }
      setFavIconName(WISHLIST_ICON_NAME.WISHLIST);
      addProductToWishlist(userId, {
        productId: id,
      });
      addToast(TOAST_TEXT.ADD_PRODUCT_IN_WISHLIST, TOAST_TYPE.SUCCESS);
    }
  };

  const onRemoveFromWishlistHandler = () => {
    removeProductFromWishlist(userId, wishlistId);
    addToast(TOAST_TEXT.REMOVED_PRODUCT_FROM_WISHLIST, TOAST_TYPE.WARNING);
  };

  const onBuyNowClickHandler = () => {
    //removeProductToWishlist(userId, wishlistId);
    addToast(TOAST_TEXT.BUY_NOW, TOAST_TYPE.INFO);
  };

  return (
    <Card className={`product-card ${className}`}>
      <div className="image-area">
        <Link to={`productdetail/${id - 1}`}>
          <Image className="product-image" {...{ src: image, alt: 'pics' }} />
        </Link>

        <div className="offer-price-wishlist">
          <Tag className="offer-price" {...{ text: '- 36 %' }} />
          <Icon
            name={isAddedInWishlist ? WISHLIST_ICON_NAME.WISHLIST : iconName}
            onClick={() => onFavIconClickHandler(isAddedInWishlist ? WISHLIST_ICON_NAME.WISHLIST : iconName)}
          />
        </div>
      </div>
      <div className="description-area">
        <Title {...{ text: title }} />
        <Body {...{ text: description }} />
        <Price {...{ currentPrice: price, previousPrice: price }} />
        {type !== 'trending' && (
          <div className="action-buttons">
            <Button
              {...{
                text: isAddedInCheckout ? BUTTON_TEXT.GO_TO_CART : button1?.text,
                type: 'outline',
                onClick: onAddToCartHandler,
              }}
            />
            <Button
              {...{
                text: button2?.text,
                onClick: button2?.text === BUTTON_TEXT.REMOVE ? onRemoveFromWishlistHandler : onBuyNowClickHandler,
              }}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
