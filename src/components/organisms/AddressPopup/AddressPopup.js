import { Button, Container, Dropdown, Popup, Radio, TextInput } from '../../atoms';
import './addressPopup.scss';

const AddressPopup = () => {
  return (
    <Popup isShow={true}>
      <Container className='address-popup'>
        <div className='row flex-nowrap'>
          <TextInput className='col-md-6' {...{ label: 'Name', placeHolder: 'Enter name' }} />
          <TextInput className='col-md-6' {...{ label: 'Mobile Number', placeHolder: 'Enter name' }} />
        </div>
        <div className='row flex-nowrap'>
          <TextInput className='col-md-6' {...{ label: 'Pincode', placeHolder: 'Enter pincode' }} />
          <TextInput className='col-md-6' {...{ label: 'Locality', placeHolder: 'Enter locality' }} />
        </div>
        <div className='row flex-nowrap'>
          <TextInput
            className='col-md-6'
            {...{ label: 'Address(Area/Street)', placeHolder: 'Enter address' }}
          />
          <TextInput className='col-md-6' {...{ label: 'City', placeHolder: 'Enter city' }} />
        </div>
        <div className='row flex-nowrap'>
          <TextInput className='col-md-6' {...{ label: 'Landmark', placeHolder: 'Enter landmark' }} />
          <div className='col-md-6 state'>
            <h5 className='mb-1'>State</h5>
            <Dropdown {...{ heading: 'Select state', items: ['State 1', 'State 2', 'State 3'] }} />
          </div>
        </div>
        <div className='row flex-nowrap address-type'>
          <h5>Address Type :</h5>
          <Radio {...{ label: 'Home', name: 'addresstype' }} />
          <Radio {...{ label: 'Office', name: 'addresstype' }} />
          <Radio {...{ label: 'Other', name: 'addresstype' }} />
        </div>
        <Button {...{ text: 'SAVE ADDRESS' }} />
      </Container>
    </Popup>
  );
};

export default AddressPopup;
