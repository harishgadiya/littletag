import { facebookProvider, googleProvider } from '../../../config/authMethods';
import socialMediaAuth from '../../../services/auth';
import { Body, Button, Icon, Popup, TextInput } from '../../atoms';
import './index.scss';

const Login = () => {
  const handleClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(',>>>>>>', res);
  }

  

  return (
    <Popup isShow={true}>
      <div className='login'>
        <h1 className='heading'>
          Login <span>or</span> Signup
        </h1>
        <div className='action-btn'>
          <a onClick={() => handleClick(facebookProvider)} href="#"><Icon name='facebook' /></a>
          <a onClick={() => handleClick(googleProvider)}><Icon name='gmail' /></a>
          <Icon name='or' className='or' />
          <TextInput {...{ placeholder: 'Email or Mobile Number' }} />
          <Button text='Get OTP' />

          <Body {...{ text: 'By continuing, I agree to the Terms of Use & Privacy Policy' }} />
        </div>
      </div>
    </Popup>
  );
};

export default Login;
