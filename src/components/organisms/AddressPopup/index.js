import { Container, Popup, TextInput } from '../../atoms';
import './index.scss';

const AddressPopup = () => {
  return (
    <Popup isShow={true}>
      <Container className='address-popup'>
        <div className='row'>
          <TextInput className='col-md-6' {...{ label: 'Name', placeHolder: 'Enter name' }} />
          <TextInput className='col-md-6' {...{ label: 'Mobile Number', placeHolder: 'Enter name' }} />
        </div>
      </Container>
    </Popup>
  );
};

export default AddressPopup;
