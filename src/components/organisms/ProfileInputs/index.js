import TextInput from '../../atoms/TextInput';

import './index.scss';

const ProfileInputs = () => {
  return (
    <div className='profile-inputs'>
      <div className='row mt-3'>
        <div className='col-md-6'>
          <TextInput {...{ label: 'Name', placeHolder: 'Enter name' }} />
        </div>
      </div>
      <div className='row  mt-3'>
        <div className='col-md-6'>
          <TextInput {...{ label: 'Email', text: 'singh.durgesh2011@gmail.com', disabled: true }} />
        </div>
        <div className='col-md-6'>
          <TextInput {...{ label: 'Mobile Number', text: '9807025178', disabled: true }} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInputs;
