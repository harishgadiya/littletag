import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();

  useEffect(() => {
    setState({ name, mobileNumber, alternateNumber, gender });
  }, [name, mobileNumber, alternateNumber, gender]);

  const onChangeHandler = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
    buttonDisabled && setButtonDisabled(false);
  };
  const onSaveHandler = () => {
    updateUserInfo(dispatch, email, id, { ...state, email, addressList });
    addToast(TOAST_TEXT.USER_DETAILS_UPDATED_SUCCESSFULLY, TOAST_TYPE.SUCCESS);
    !buttonDisabled && setButtonDisabled(true);
  };

  return (
    <div className="profile-inputs">
      <div className="row row-cols-1 row-cols-lg-2 gy-3">
        <div className="col">
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
        <div className="col">
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
      <div className="row row-cols-1 row-cols-md-2 gy-3">
        <div className="col">
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
        <div className="col">
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
      <div className="row flex-md-nowrap gy-3 align-items-center gender-selection-section">
        <h5>Gender :</h5>
        <Radio
          {...{
            label: 'Male',
            name: 'gender',
            checked: state?.gender?.toLowerCase() === 'male',
            value: 'male',
            disabled: !!gender,
            onChange: !gender ? onChangeHandler : undefined,
          }}
        />
        <Radio
          {...{
            label: 'Female',
            name: 'gender',
            checked: state?.gender?.toLowerCase() === 'female',
            value: 'female',
            disabled: !!gender,
            onChange: !gender ? onChangeHandler : undefined,
          }}
        />
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
