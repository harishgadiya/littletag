import { saveSelectedAddress } from '../../../api/userAPIs';
import { Dropdown } from '../../atoms';
import { CheckoutCard } from '../../molecules';
import './checkoutProducts.scss';

const CheckoutProducts = ({ heading, products, userId, addressList, dispatch, selectedAddress }) => {
  const addresses = {
    heading: 'Select address',
    items: addressList
      ? [
          ...addressList?.map((item) => ({
            key: item?.id,
            value: `${item?.name}-${item?.mobileNo}, ${item?.address}, ${item?.locality}, ${item?.city}, ${item?.state}-${item?.pinCode}`,
          })),
        ]
      : ['Select address'],
  };

  const onAddressChangeHandler = (event) => {
    const curentSlectedAddress = event.target.value;
    curentSlectedAddress && saveSelectedAddress(dispatch, userId, curentSlectedAddress);
  };
  return (
    <div className="checkout-products">
      <div className="checkout-header">
        <h3>{heading}</h3>
        <div className="address">
          <h4 className="me-1 me-md-2">Delivery to</h4>
          <Dropdown
            {...addresses}
            {...{ onChangeHandler: onAddressChangeHandler, selectProps: { value: selectedAddress } }}
          />
        </div>
      </div>
      <div className="cards">
        {products.map((item, index) => (
          <CheckoutCard key={index} className="my-2" {...item} {...{ userId }} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutProducts;
