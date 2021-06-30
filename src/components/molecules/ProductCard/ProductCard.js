import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { addProductToCart, addProductToWishlist, removeProductFromWishlist } from '../../../api/productAPIs';
import { availableSizes } from '../../../Pages/ProductDetail';
import { openLoginPopup } from '../../../redux/actions/loginActions';
import { PAGE_NAMES } from '../../../utils/constants';
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
  prevPrice,
  title,
  userId,
  className,
  wishlistId,
  isAddedInWishlist,
  isAddedInCheckout,
  pageName,
  offerPercentage,
}) => {
  const [favIconName, setFavIconName] = useState(isAddedInWishlist ? WISHLIST_ICON_NAME.WISHLIST : iconName);
  const { addToast } = useToasts();
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedSize, setSize] = useState('');
  const handleSize = (size) => {
    setSize(size);
  };
  const openSizePopup = () => {
    setShow(!show);
  };

  const onAddToCartHandler = () => {
    if (!isAddedInCheckout && selectedSize === '') {
      openSizePopup();
      return false
    }
    if (userLoginWarning()) {
      if (isAddedInCheckout) {
        history.push('/checkout');
        return;
      }
      addProductToCart(dispatch, userId, {
        productId: id,
        quantity: 1,
        selectedSize
      });
      addToast(TOAST_TEXT.ADDED_PRODUCT_IN_CART, TOAST_TYPE.SUCCESS);
      if (pageName === PAGE_NAMES.WISHLIST) {
        onRemoveFromWishlistHandler();
      }
    }
  };

  const onFavIconClickHandler = (currentIconName) => {
    if (userLoginWarning()) {
      if (currentIconName === WISHLIST_ICON_NAME.WISHLIST) {
        onRemoveFromWishlistHandler();
      } else {
        // if (currentIconName === WISHLIST_ICON_NAME.WISHLIST) {
        //   addToast(TOAST_TEXT.PRODUCT_ALREADY_IN_WISHLIST, TOAST_TYPE.INFO);
        //   return;
        // }
        setFavIconName(WISHLIST_ICON_NAME.WISHLIST);
        addProductToWishlist(dispatch, userId, {
          productId: id,
        });
        addToast(TOAST_TEXT.ADD_PRODUCT_IN_WISHLIST, TOAST_TYPE.SUCCESS);
      }
    }
  };

  const onRemoveFromWishlistHandler = () => {
    if (userLoginWarning()) {
      const isUpdateProducts = pageName === PAGE_NAMES.LISTING;
      removeProductFromWishlist(dispatch, userId, wishlistId, isUpdateProducts);
      addToast(TOAST_TEXT.REMOVED_PRODUCT_FROM_WISHLIST, TOAST_TYPE.WARNING);
    }
  };

  const userLoginWarning = () => {
    if (!userId) {
      dispatch(openLoginPopup());
      addToast(TOAST_TEXT.USER_NOT_LOGIN_WARNING, TOAST_TYPE.WARNING);
      return false;
    }
    return true;
  };

  const onBuyNowClickHandler = () => {
    //removeProductToWishlist(userId, wishlistId);
    if (!isAddedInCheckout && selectedSize === '') {
      openSizePopup();
      return false
    }
    addProductToCart(dispatch, userId, {
      productId: id,
      quantity: 1,
      selectedSize
    });
    history.push('/checkout');
    addToast(TOAST_TEXT.BUY_NOW, TOAST_TYPE.INFO);
  };

  return (
    <Card className={`product-card ${className}`}>
      <div className="image-area">
        <Link to={`productdetail/${id - 1}`}>
          <Image className="product-image" {...{ src: image, alt: 'pics' }} />
        </Link>
        <div className="offer-price-wishlist">
          <Tag className="offer-price" {...{ text: offerPercentage && `-${offerPercentage}%` }} />
          <Icon
            name={isAddedInWishlist ? WISHLIST_ICON_NAME.WISHLIST : iconName}
            onClick={() => onFavIconClickHandler(isAddedInWishlist ? WISHLIST_ICON_NAME.WISHLIST : iconName)}
          />
        </div>
      </div>
      <div className="description-area">
        <Title {...{ text: title }} />
        <Body {...{ text: description }} />
        <Price {...{ currentPrice: price, previousPrice: prevPrice }} />
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
        {show && (
          <div className="product-size">
            <div className="col-12 border-bottom">
              {availableSizes.map((size) => (
                <Button
                  type="outlined"
                  text={size}
                  onClick={() => handleSize(size)}
                  className={selectedSize === size ? 'active' : ''}
                />
              ))}
            </div>
            <Button className="close" type="outlined" text="Close" onClick={() => setShow(false)} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
