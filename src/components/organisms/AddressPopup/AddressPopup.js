import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../../api/userAPIs';
import { STATES } from '../../../utils/constants/states';
import { Button, Container, Dropdown, Popup, Radio, TextInput } from '../../atoms';
import './addressPopup.scss';

const AddressPopup = ({ isPopupShow, onCloseHandler, userEmail, userId, selectedAddress = {} }) => {
  const [isShow, setIsShow] = useState(isPopupShow);
  const [state, setState] = useState({
    name: '',
    mobileNo: '',
    pinCode: '',
    locality: '',
    address: '',
    city: '',
    landmark: '',
    state: '',
    addresstype: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setState({ ...selectedAddress });
  }, [selectedAddress]);

  const onChangeHandler = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const saveHandler = () => {
    addAddress(dispatch, userEmail, state, userId);
    setIsShow(false);
    onCloseHandler();
  };
  const textInputClasses = 'col';
  return (
    <Popup isShow={isShow} onCloseHandler={onCloseHandler}>
      <Container className="address-popup">
        <div className="row row-cols-1 row-cols-md-2 gy-3">
          <TextInput
            className={textInputClasses}
            {...{ label: 'Name', placeholder: 'Enter name', name: 'name', text: state.name, onChange: onChangeHandler }}
          />
          <TextInput
            className={textInputClasses}
            {...{
              label: 'Mobile Number',
              placeholder: 'Enter mobile number',
              name: 'mobileNo',
              text: state.mobileNo,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 gy-3">
          <TextInput
            className={textInputClasses}
            {...{
              label: 'Pincode',
              placeholder: 'Enter pincode',
              name: 'pinCode',
              text: state.pinCode,
              onChange: onChangeHandler,
            }}
          />
          <TextInput
            className={textInputClasses}
            {...{
              label: 'Locality',
              placeholder: 'Enter locality',
              name: 'locality',
              text: state.locality,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 gy-3">
          <TextInput
            className={textInputClasses}
            {...{
              label: 'Address(Area/Street)',
              placeholder: 'Enter address',
              name: 'address',
              text: state.address,
              onChange: onChangeHandler,
            }}
          />
          <TextInput
            className={textInputClasses}
            {...{ label: 'City', placeholder: 'Enter city', name: 'city', text: state.city, onChange: onChangeHandler }}
          />
        </div>
        <div className="row row-cols-1 row-cols-md-2 gy-3 align-items-center">
          <TextInput
            className={textInputClasses}
            {...{
              label: 'Landmark',
              placeholder: 'Enter landmark',
              name: 'landmark',
              text: state.landmark,
              onChange: onChangeHandler,
            }}
          />
          <div className="col-md-6 state">
            <h5 className="mb-1">State</h5>
            <Dropdown
              {...{
                items: ['Select state', ...STATES],
                selectProps: { name: 'state', value: state.state },
                onChangeHandler,
              }}
            />
          </div>
        </div>
        <div className="row flex-md-nowrap my-2 address-type">
          <h5>Address Type :</h5>
          <Radio
            {...{
              label: 'Home',
              name: 'addresstype',
              value: 'Home',
              onChange: onChangeHandler,
              checked: state.addresstype === 'Home',
            }}
          />
          <Radio
            {...{
              label: 'Office',
              name: 'addresstype',
              value: 'Office',
              onChange: onChangeHandler,
              checked: state.addresstype === 'Office',
            }}
          />
          <Radio
            {...{
              label: 'Other',
              name: 'addresstype',
              value: 'Other',
              onChange: onChangeHandler,
              checked: state.addresstype === 'Other',
            }}
          />
        </div>
        <Button {...{ text: 'SAVE ADDRESS', onClick: saveHandler }} />
      </Container>
    </Popup>
  );
};

export default AddressPopup;
