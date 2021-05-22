import Container from '../../components/atoms/Container';
import ProfileInputs from '../../components/organisms/ProfileInputs';
import Title from '../../components/atoms/Title';
import AddressCard from '../../components/molecules/AddressCard';
import { Button } from '../../components/atoms';
import { useState } from 'react';
import { AddressPopup } from '../../components/organisms';

import './profileDetails.scss';

const ProfileDetails = () => {
  const [addressPopup, setAddressPopup] = useState(false);

  const addressBooks = [{}, {}, {}];

  const addressPopupHandler = () => {
    setAddressPopup((prev) => !prev);
  };
  return (
    <Container className='profile-details'>
      <h1>Profile Details</h1>
      <div className='main-content'>
        <ProfileInputs />
        <Title {...{ text: 'Address Books' }} />
        {addressBooks.map((item, index) => (
          <AddressCard key={index} {...item} />
        ))}
        <Button {...{ text: '+ ADD NEW ADDRESS', onClick: addressPopupHandler }} />
      </div>
      {addressPopup && <AddressPopup />}
    </Container>
  );
};

export default ProfileDetails;
