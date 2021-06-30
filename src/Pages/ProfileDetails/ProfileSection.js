import { useEffect, useState } from 'react';
import { Button, Title } from '../../components/atoms';
import { AddressCard } from '../../components/molecules';
import { AddressPopup, ProfileInputs } from '../../components/organisms';

import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../../api/userAPIs';
import { useToasts } from 'react-toast-notifications';
import { TOAST_TEXT, TOAST_TYPE } from '../../utils/constants/toast';
import { openLoginPopup } from '../../redux/actions/loginActions';

const ProfileSection = () => {
  const [addressPopupShow, setAddressPopupShow] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const { addToast } = useToasts();

  useEffect(() => {
    if (!user?.email) {
      addToast(TOAST_TEXT.USER_NOT_LOGIN_WARNING, TOAST_TYPE.WARNING);
      dispatch(openLoginPopup());
    }
  }, [user?.email]);

  const addressPopupHandler = (type) => {
    if (type !== 'edit') {
      setSelectedAddress(null);
    }
    setAddressPopupShow((prev) => !prev);
  };
  const onEditAddressHandler = (selectedAdd) => {
    setSelectedAddress(selectedAdd);
    addressPopupHandler('edit');
  };
  const onDeleteAddressHandler = (addressId) => {
    if (window && window.confirm('Are you sure to delete this address?')) {
      deleteAddress(dispatch, user?.email, user?.id, addressId);
    }
  };

  return (
    <>
      {/* <h1>Profile Details</h1> */}
      <div className="main-content">
        <ProfileInputs {...user} />
        <Title {...{ text: 'Address Books' }} />
        {user?.addressList?.map((item, index) => (
          <AddressCard key={index} {...item} {...{ onEditAddressHandler, onDeleteAddressHandler }} />
        ))}
        <div className="d-flex">
          <Button
            {...{
              text: '+ ADD NEW ADDRESS',
              onClick: addressPopupHandler,
            }}
          />
        </div>
      </div>
      {addressPopupShow && (
        <AddressPopup
          {...{
            isPopupShow: addressPopupShow,
            onCloseHandler: addressPopupHandler,
            userId: user.id,
            userEmail: user.email,
            selectedAddress,
          }}
        />
      )}
    </>
  );
};

export default ProfileSection;
