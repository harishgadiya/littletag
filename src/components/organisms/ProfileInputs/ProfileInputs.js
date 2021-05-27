import { Radio } from '../../atoms';
import TextInput from '../../atoms/TextInput';

import './profileInputs.scss';

const ProfileInputs = ({ name, email, mobileNumber, gender }) => {
  return (
    <div className="profile-inputs">
      <div className="row mt-3">
        <div className="col-md-6">
          <TextInput
            {...{
              label: 'Name',
              placeholder: 'Enter name',
              text: name,
            }}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            {...{
              label: 'Email',
              text: email,
              disabled: true,
              placeholder: 'Enter email',
            }}
          />
        </div>
      </div>
      <div className="row  mt-3">
        <div className="col-md-6">
          <TextInput
            {...{
              label: 'Mobile Number',
              text: mobileNumber,
              disabled: true,
              placeholder: 'Enter mobile',
            }}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            {...{
              label: 'Alternate Number',
              text: mobileNumber,
              disabled: true,
              placeholder: 'Enter alternate number',
            }}
          />
        </div>
      </div>
      <div className="row flex-nowrap mt-3">
        <div className="col-md-5 d-flex justify-content-between align-items-center">
          <h5>Gender :</h5>
          <Radio
            {...{
              label: 'Male',
              name: 'gender',
              checked: gender?.toLowerCase() === 'male',
            }}
          />
          <Radio
            {...{
              label: 'Female',
              name: 'gender',
              checked: gender?.toLowerCase() === 'female',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInputs;
