import { Dropdown } from '../../atoms';
import { CheckoutCard } from '../../molecules';
import './checkoutProducts.scss';

const CheckoutProducts = ({ heading, products }) => {
  const addresses = {
    heading: 'Select address',
    items: ['Address 1', 'Address 2', 'Address 3', 'Address 4'],
  };
  return (
    <div className='checkout-products'>
      <div className='checkout-header'>
        <h2>{heading}</h2>
        <div className='address'>
          <h3>Delivery to</h3>
          <Dropdown {...addresses} />
        </div>
      </div>
      <div className='cards'>
        {products.map((item, index) => (
          <CheckoutCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutProducts;
