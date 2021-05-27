import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../../api/userAPIs';
import { STATES } from '../../../utils/constants/states';
import { Button, Container, Dropdown, Popup, Radio, TextInput } from '../../atoms';
import './addressPopup.scss';

const AddressPopup = ({ isPopupShow, onCloseHandler, userId, selectedAddress }) => {
  const [isShow, setIsShow] = useState(isPopupShow);
  const [state, setState] = useState(
    selectedAddress || {
      name: '',
      mobileNo: '',
      pinCode: '',
      locality: '',
      address: '',
      city: '',
      landmark: '',
      state: '',
      addresstype: 'Home',
    },
  );

  const onChangeHandler = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const saveHandler = () => {
    addAddress(state, userId);
    setIsShow(false);
    onCloseHandler();
  };
  return (
    <Popup isShow={isShow} onCloseHandler={onCloseHandler}>
      <Container className="address-popup">
        <div className="row flex-nowrap">
          <TextInput
            className="col-md-6"
            {...{ label: 'Name', placeholder: 'Enter name', name: 'name', text: state.name, onChange: onChangeHandler }}
          />
          <TextInput
            className="col-md-6"
            {...{
              label: 'Mobile Number',
              placeholder: 'Enter mobile number',
              name: 'mobileNo',
              text: state.mobileNo,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <div className="row flex-nowrap">
          <TextInput
            className="col-md-6"
            {...{
              label: 'Pincode',
              placeholder: 'Enter pincode',
              name: 'pinCode',
              text: state.pinCode,
              onChange: onChangeHandler,
            }}
          />
          <TextInput
            className="col-md-6"
            {...{
              label: 'Locality',
              placeholder: 'Enter locality',
              name: 'locality',
              text: state.locality,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <div className="row flex-nowrap">
          <TextInput
            className="col-md-6"
            {...{
              label: 'Address(Area/Street)',
              placeholder: 'Enter address',
              name: 'address',
              text: state.address,
              onChange: onChangeHandler,
            }}
          />
          <TextInput
            className="col-md-6"
            {...{ label: 'City', placeholder: 'Enter city', name: 'city', text: state.city, onChange: onChangeHandler }}
          />
        </div>
        <div className="row flex-nowrap align-items-center">
          <TextInput
            className="col-md-6"
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
        <div className="row flex-nowrap address-type">
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
