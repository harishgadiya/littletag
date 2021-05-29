import Container from '../../components/atoms/Container';
import ProfileInputs from '../../components/organisms/ProfileInputs';
import Title from '../../components/atoms/Title';
import AddressCard from '../../components/molecules/AddressCard';
import { Button } from '../../components/atoms';
import { useEffect, useState } from 'react';
import { AddressPopup } from '../../components/organisms';

import './profileDetails.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress, fetchUser } from '../../api/userAPIs';

const ProfileDetails = () => {
  const [addressPopupShow, setAddressPopupShow] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log('user => ', user);
  useEffect(() => {
    if (!user?.mobileNumber) {
      fetchUser(dispatch);
    }
  }, [dispatch]);

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
      deleteAddress(user.id, addressId);
    }
  };
  return (
    <Container className="profile-details">
      <h1>Profile Details</h1>
      <div className="main-content">
        <ProfileInputs {...user} />
        <Title {...{ text: 'Address Books' }} />
        {user?.addressList?.map((item, index) => (
          <AddressCard key={index} {...item} {...{ onEditAddressHandler, onDeleteAddressHandler }} />
        ))}
        <Button
          {...{
            text: '+ ADD NEW ADDRESS',
            onClick: addressPopupHandler,
          }}
        />
      </div>
      {addressPopupShow && (
        <AddressPopup
          {...{
            isPopupShow: addressPopupShow,
            onCloseHandler: addressPopupHandler,
            userId: user.id,
            selectedAddress,
          }}
        />
      )}
    </Container>
  );
};

export default ProfileDetails;
