import { useState } from 'react';

import Container from '../../components/atoms/Container';
import ProfileSection from './ProfileSection';
import Overview from './Overview';
import OrderDetails from './OrderDetails';
import { loadState } from '../../redux/localStorage';

import './profileDetails.scss';

const myAccountMapping = {
  overview: Overview,
  myAddress: ProfileSection,
  orderDetail: OrderDetails,
};

const currentUser = loadState();
const ProfileDetails = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const RenderComponent = myAccountMapping[selectedTab];

  return (
    <Container className="profile-details container">
      <div className="row">
        <div className="col-12">
          <div className="heading">
            <h2 className="">Account</h2>
            <h4 className="username">{currentUser?.name}</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4">
          <ul className="profile-page">
            <li>
              <a onClick={() => handleSelectedTab('overview')} className={selectedTab === 'overview' ? 'active' : ''}>
                Overview
              </a>
            </li>
            <li>
              <a
                onClick={() => handleSelectedTab('orderDetail')}
                className={selectedTab === 'orderDetail' ? 'active' : ''}
              >
                Order Details
              </a>
            </li>
            <li>
              <a onClick={() => handleSelectedTab('myAddress')} className={selectedTab === 'myAddress' ? 'active' : ''}>
                Profile & Address
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-8">
          <RenderComponent />
        </div>
      </div>
    </Container>
  );
};

export default ProfileDetails;
