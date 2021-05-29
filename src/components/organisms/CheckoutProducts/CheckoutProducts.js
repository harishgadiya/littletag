import { Dropdown } from '../../atoms';
import { CheckoutCard } from '../../molecules';
import './checkoutProducts.scss';

const CheckoutProducts = ({ heading, products, userId, addressList }) => {
  const addresses = {
    heading: 'Select address',
    items: [
      'Select address',
      ...addressList?.map(
        (item) =>
          `${item.name}-${item.mobileNo}, ${item.address}, ${item.locality}, ${item.city}, ${item.state}-${item.pinCode}`,
      ),
    ],
  };
  return (
    <div className="checkout-products">
      <div className="checkout-header">
        <h2>{heading}</h2>
        <div className="address">
          <h3>Delivery to</h3>
          <Dropdown {...addresses} />
        </div>
      </div>
      <div className="cards">
        {products.map((item, index) => (
          <CheckoutCard key={index} {...item} {...{ userId }} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutProducts;
