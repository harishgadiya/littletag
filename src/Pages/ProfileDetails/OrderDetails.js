import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrderDetails } from '../../api/productAPIs';
import { Button } from '../../components/atoms';
import fetchProducts from '../../redux/actions/productListingAction';
import { getDateInFormat } from '../../utils/common';
import './orderDetail.scss';

// const currentUser = loadState();
const OrderDetails = () => {
  const { user, orderDetail, products } = useSelector((state) => state);
  const orders = orderDetail?.orders;
  // const { products: orderedProduct, deliveryAddress } = orders.hasOwnProperty('-MbNHtguaSRVYrTpW5ch')
  //   ? orders['-MbNHtguaSRVYrTpW5ch']
  //   : {};
  const orderedProduct = orders ? Object.keys(orders).map((id) => orders[id]) : [];
  const dispatch = useDispatch();
  // if (!products?.products?.length && orderedProduct?.length) {
  //   fetchProducts();
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    fetchProducts()(dispatch);
    getOrderDetails(dispatch, user.id);
  }, []);
  console.log(products, '>>>>>>>==============');
  if (orderDetail.loading || !products?.products?.length) {
    return (
      <div className="spin-center">
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <div className="orderWrapper">
      {products?.products?.length &&
        orderedProduct?.map((orderP) => {
          return orderP?.products.map((product) => {
            const myProduct = products?.products[product.productId - 1];
            return (
              <div className="product" key={product.productId}>
                <div className="row">
                  <div className="col-3 col-md-1">
                    <img src={myProduct.image} />
                  </div>
                  <div className="col-9 col-md-11">
                    <h4>{myProduct.brand}</h4>
                    <p>{myProduct.title}</p>
                    <div>
                      <strong>Purchased price: </strong> {product.purchasedPrice}
                    </div>
                    <div>
                      <strong>Ordered Date: </strong> {getDateInFormat(orderP.date, 'ddd, DD MMM YYYY')}
                    </div>
                    <div>
                      <strong>Delivered by: </strong> {getDateInFormat(orderP.deliverBy, 'ddd, DD MMM YYYY')}
                    </div>
                    <strong>Color: </strong> {myProduct.color}
                  </div>
                  <div className="col-12">
                    <Link to={`productdetail/${product.productId - 1}`}>
                      <Button text="Buy again" type="outline" className="buy-again" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          });
        })}
    </div>
  );
};

export default OrderDetails;
