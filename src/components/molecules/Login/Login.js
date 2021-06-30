import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../api/userAPIs';
import { facebookProvider, googleProvider } from '../../../config/authMethods';
import socialMediaAuth from '../../../services/auth';
import { Body, Icon, Popup } from '../../atoms';
import './login.scss';

const Login = ({ isShow, onCloseHandler }) => {
  const dispatch = useDispatch();
  const handleClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    const { displayName, email, phoneNumber, photoURL, gender } = res;
    createUser(dispatch, { name: displayName, email, gender, mobileNumber: phoneNumber, ptofilePic: photoURL });
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
          <a href="#" style={{ opacity: 0.5 }}>
            {/* onClick={() => handleClick(facebookProvider)} */}
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
