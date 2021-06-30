import { Body, Card, Icon, Tag, Title } from '../../atoms';
import './addressCard.scss';

const AddressCard = ({
  id,
  addresstype,
  name,
  mobileNo,
  address,
  locality,
  landmark,
  city,
  state,
  pinCode,
  onEditAddressHandler,
  onDeleteAddressHandler,
}) => {
  const onEditClickHandler = () => {
    onEditAddressHandler({ id, addresstype, name, mobileNo, address, locality, landmark, city, state, pinCode });
  };
  const onDeleteClickHandler = () => {
    onDeleteAddressHandler(id);
  };
  return (
    <Card className="address-card">
      <div className="tag-edit">
        <Tag {...{ text: addresstype }} />
        <div>
          <Icon name="edit" onClick={onEditClickHandler} />
          <Icon name="delete" onClick={onDeleteClickHandler} />
        </div>
      </div>
      <div className="name-mobile">
        <Title {...{ text: name }} />
        <Title className="mobile" {...{ text: mobileNo }} />
      </div>
      <div className="address">
        <Body {...{ text: `${address}, ${locality}(${landmark}), ${city}, ${state} - ${pinCode}` }} />
      </div>
    </Card>
  );
};
export default AddressCard;
