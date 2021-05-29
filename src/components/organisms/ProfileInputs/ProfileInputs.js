import { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { updateUserInfo } from '../../../api/userAPIs';
import { TOAST_TEXT, TOAST_TYPE } from '../../../utils/constants/toast';
import { Button, Radio } from '../../atoms';
import TextInput from '../../atoms/TextInput';

import './profileInputs.scss';

const ProfileInputs = ({ id, name, email, mobileNumber, alternateNumber, gender, addressList }) => {
  const [state, setState] = useState({ name: '', email: '', mobileNumber: '', alternateNumber: '', gender: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    setState({ name, mobileNumber, alternateNumber, gender });
  }, [name, mobileNumber, alternateNumber, gender]);

  const onChangeHandler = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
    buttonDisabled && setButtonDisabled(false);
  };
  const onSaveHandler = () => {
    updateUserInfo(id, { ...state, email, addressList });
    addToast(TOAST_TEXT.USER_DETAILS_UPDATED_SUCCESSFULLY, TOAST_TYPE.SUCCESS);
    !buttonDisabled && setButtonDisabled(true);
  };
  return (
    <div className="profile-inputs">
      <div className="row mt-3">
        <div className="col-md-6">
          <TextInput
            {...{
              label: 'Name',
              placeholder: 'Enter name',
              text: state?.name,
              name: 'name',
              onChange: onChangeHandler,
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
              placeholder: 'Enter mobile',
              text: state?.mobileNumber,
              name: 'mobileNumber',
              onChange: onChangeHandler,
            }}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            {...{
              label: 'Alternate Number',
              placeholder: 'Enter alternate number',
              text: state?.alternateNumber,
              name: 'alternateNumber',
              onChange: onChangeHandler,
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
              checked: state?.gender?.toLowerCase() === 'male',
              value: 'male',
              disabled: !!state?.gender,
              onChange: !state?.gender ? onChangeHandler : undefined,
            }}
          />
          <Radio
            {...{
              label: 'Female',
              name: 'gender',
              checked: state?.gender?.toLowerCase() === 'female',
              value: 'female',
              disabled: !!state?.gender,
              onChange: !state?.gender ? onChangeHandler : undefined,
            }}
          />
        </div>
      </div>
      <div className="row  mt-3 save-button ">
        <Button
          {...{
            text: 'SAVE',
            onClick: onSaveHandler,
            disabled: buttonDisabled,
          }}
        />
      </div>
    </div>
  );
};

export default ProfileInputs;
