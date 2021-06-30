import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import { useToasts } from 'react-toast-notifications';
import { addProductToCart } from '../../api/productAPIs';
import { Body, Button, Container, Image, Price, Title } from '../../components/atoms';
import Breadcrumb from '../../components/atoms/Breadcrumb';
import { TrendingProducts, CategoryProducts } from '../../components/organisms';
import fetchProducts from '../../redux/actions/productListingAction';
import { TOAST_TEXT, TOAST_TYPE } from '../../utils/constants/toast';
import './ProductDetails.scss';

const trendingProductsInIndeanWear = {
  heading: 'Similar Products',
  cards: [
    {
      image:
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/26/6b430ac0-d462-4221-a69d-aa8eef98f0b21622024537911-Sports-shoes--1-.jpg',
      link: 'listing?brand=puma',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg',
      link: '/listing?brand=nike',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/26/7ff94af3-857c-4b93-86ac-7cec397dd7851622024429489-men---s-activewear.jpg',
      link: '/listing?brand=rebook',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg',
      link: '/listing?brand=nike',
    },
  ],
};

export const availableSizes = ['XS', 'S', 'M', 'L'];
const ProductDetail = (props) => {
  const { id: userId } = useSelector((state) => state?.user);
  const [product, setProduct] = useState({});
  const [selectedSize, setSize] = useState('');
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const history = useHistory();
  const productId = props.match.params.id;
  useEffect(() => {
    if (props.productList.length) {
      setProduct(props.productList[productId]);
    } else {
      props.fetchProducts();
    }
  }, [product, props.productList]);

  const handleSize = (size) => {
    setSize(size);
  };

  const addToCart = (isBuyNow = false) => {
    if (selectedSize === '') {
      addToast(TOAST_TEXT.SELECTED_SIZE, TOAST_TYPE.WARNING);
      return false;
    }
    addProductToCart(dispatch, userId, {
      productId: Number(productId) + 1,
      quantity: 1,
      selectedSize,
    });
    if (isBuyNow) {
      history.push('/checkout');
    }
    addToast(TOAST_TEXT.ADDED_PRODUCT_IN_CART, TOAST_TYPE.SUCCESS);
  };

  const { image, title, description, price } = product;
  if (props.loading) {
    return (
      <div className="spin-center">
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <div className="container product-detail">
      <div className="row">
        <div className="col-12">
          <Breadcrumb name={product.title} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Image className="product-image" {...{ src: image, alt: 'pics' }} />
        </div>
        <div className="col-12 col-md-6">
          <div className="description-area">
            <Title text={title} component="h2" />
            <Body {...{ text: description }} />
            <div className="size">
              {selectedSize && (
                <div className="col-12 ">
                  <strong>Size: </strong> <strong className="selectedSize">{selectedSize}</strong>
                </div>
              )}
              <div className="col-12 border-bottom">
                {availableSizes.map((size) => (
                  <Button
                    text={size}
                    onClick={() => handleSize(size)}
                    className={selectedSize === size ? 'active' : ''}
                  />
                ))}
              </div>
            </div>
            <div className="border-bottom">
              <Price {...{ currentPrice: price, previousPrice: price + 100, showDiscount: true }} />
              <span className="tax">inclusive of all taxes</span>
            </div>
            <div className="action-buttons border-bottom">
              <Button {...{ text: 'Add to cart', type: 'outline' }} onClick={addToCart} />
              <Button {...{ text: 'Buy now' }} onClick={() => addToCart(true)} />
            </div>
            <div className="col-12 product-common-feature">
              <ul>
                <li>100% Original Products</li>
                <li>Free Delivery on order above Rs. 799</li>
                <li>Pay on delivery might be available</li>
                <li>Easy 30 days returns and exchanges</li>
                <li>Try & Buy might be available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <CategoryProducts {...trendingProductsInIndeanWear} />
        </div>
      </div>
    </div>
  );
};

// export default ProductDetail;

const mapStateToProps = (state) => {
  return {
    productList: state?.products.products,
    loading: state.products.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetail));
