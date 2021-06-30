import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Body, Card, Title } from '../../components/atoms';
import { getDateInFormat } from '../../utils/common';

import './orderSuccessful.scss';

const OrderSuccessful = () => {
  const { recentlyPlacedOrderDetails } = useSelector((state) => ({
    recentlyPlacedOrderDetails: state?.user?.recentlyPlacedOrderDetails,
  }));
  const { totalItems, totalPrice, selectedAddressDetails, deliverBy } = recentlyPlacedOrderDetails || {};
  const { name, address, landmark, locality, city, state, pinCode, mobileNo } = selectedAddressDetails || {};
  return (
    <Card className="order-successful">
      <div className="sumarry">
        <Title text="Order Placed" />
        <Body {...{ text: `Total price for ${totalItems} item${totalItems > 0 ? 's' : ''} Rs. ${totalPrice}` }} />
        <Link to="/profile">
          View Details <span class="icon-arrow-left"></span>
        </Link>
      </div>
      <div className="delivery">
        <Body {...{ text: `Delivery by ${getDateInFormat(deliverBy, 'ddd, DD MMM YYYY')}` }} />
      </div>
      <div className="address">
        <Title text={name} />
        <Body {...{ text: `${address}, ${landmark} , ${locality}` }} />
        <Body {...{ text: city }} />
        <Body {...{ text: `${state} - ${pinCode}` }} />
        <div className="d-flex align-items-center py-1">
          <h5 className="me-2">Phone number: </h5> <Body {...{ text: ` ${mobileNo}` }} />
        </div>
      </div>
      <div className="continue-shopping">
        <Link to="/listing">
          Continue shopping <span class="icon-arrow-left"></span>
        </Link>
      </div>
    </Card>
  );
};

export default OrderSuccessful;
