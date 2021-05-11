import { Body, Button, Icon, TextInput, Title } from '../../atoms';

import './index.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contact-us'>
        <Title {...{ text: 'BE IN TOUCH WITH US' }} />
        <div>
          <TextInput {...{ placeholder: 'Enter email to subscribe' }} />
          <Button {...{ text: 'JOIN US' }} />
        </div>
        <Icon name='social' />
      </div>
      <div className="container">
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <Title {...{ text: 'CATEGORY' }} />
            <Body {...{ text: 'Men' }} />
            <Body {...{ text: 'Women' }} />
            <Body {...{ text: 'Accessories' }} />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <Title {...{ text: 'INFORMATION' }} />
            <Body {...{ text: 'About Us' }} />
            <Body {...{ text: 'Contact Us' }} />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <Title {...{ text: 'USEFULL LINKS' }} />
            <Body {...{ text: 'Terms & Conditions' }} />
            <Body {...{ text: 'Return & Exchange' }} />
            <Body {...{ text: 'Privacy Policy' }} />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <Title {...{ text: 'CONTACT US' }} />
            <Body {...{ text: 'Sector 21 Gurgaon' }} />
            <Body {...{ text: '1800 999 2121' }} />
            <Body {...{ text: 'help@littletags.com' }} />
          </div>
        </div>
      </div>
      <div className='copyright'>
        <Body {...{ text: 'Copyright © 2021 Little Tags. All right reserved.' }} />
      </div>
    </div>
  );
};

export default Footer;
