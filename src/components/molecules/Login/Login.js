import { useEffect } from 'react';
import { productJSON } from '../../../mockData';
import { facebookProvider, googleProvider } from '../../../config/authMethods';
import socialMediaAuth from '../../../services/auth';
import { Body, Button, Icon, Popup, TextInput } from '../../atoms';
import firebase from '../../../config/firebase-config';
import './login.scss';

const Login = ({ isShow, onCloseHandler }) => {
  const handleClick = async (provider) => {
    const res = await socialMediaAuth(provider);
  };

  useEffect(() => {
    // const ref = firebase.database().ref('products');
    // ref.push(productJSON);
    // productJSON.map(s => ref.push(s));
  }, []);

  return (
    <Popup {...{ isShow, onCloseHandler }}>
      <div className="login">
        <h1 className="heading">
          Login <span>or</span> Signup
        </h1>
        <div className="action-btn">
          <a onClick={() => handleClick(facebookProvider)} href="#">
            <Icon name="facebook-button" />
          </a>
          <a onClick={() => handleClick(googleProvider)}>
            <Icon name="gmail-button" />
          </a>
          {/* <Icon name='or' className='or' />
          <TextInput {...{ placeholder: 'Email or Mobile Number' }} />
          <Button text='Get OTP' /> */}

          <Body {...{ text: 'By continuing, I agree to the Terms of Use & Privacy Policy' }} />
        </div>
      </div>
    </Popup>
  );
};

export default Login;
