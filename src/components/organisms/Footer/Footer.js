import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { sendSubscriptionNotification } from '../../../services/sendEmail';
import { validateEmail } from '../../../utils/common';
import { TOAST_TEXT, TOAST_TYPE } from '../../../utils/constants/toast';
import { Body, Button, Icon, TextInput, Title } from '../../atoms';

import './footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { addToast } = useToasts();
  const name = useSelector((state) => state?.user?.name);

  const onTextInputChangeHandler = ({ target: { value = '' } }) => setEmail(value);

  const onJoinUsClickHandler = () => {
    if (validateEmail(email)) {
      sendSubscriptionNotification(email, name);
      setEmail('');
      addToast(TOAST_TEXT.EMAIL_SUBSCRIBED_SUCCESS, TOAST_TYPE.SUCCESS);
    } else {
      addToast(TOAST_TEXT.EMAIL_INVALID, TOAST_TYPE.WARNING);
    }
  };

  const bodyClassName = 'py-1';
  return (
    <div className="footer">
      <div className="contact-us row">
        <Title {...{ text: 'BE IN TOUCH WITH US', className: 'col-xs-12 col-md-3 my-2' }} />
        <div className="col-xs-12 col-md-6">
          <TextInput
            {...{ placeholder: 'Enter email to subscribe', text: email, onChange: onTextInputChangeHandler }}
          />
          <Button {...{ text: 'JOIN US', onClick: onJoinUsClickHandler }} />
        </div>
        <div className="social-icon-group col-xs-12 col-md-3 my-2 justify-content-start justify-content-md-end">
          <Icon name="instagram" />
          <Icon name="twitter" />
          <Icon name="facebook" />
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <Title {...{ text: 'CATEGORY' }} />
            <Body {...{ text: 'Men', className: bodyClassName }} />
            <Body {...{ text: 'Women', className: bodyClassName }} />
            <Body {...{ text: 'Accessories', className: bodyClassName }} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <Title {...{ text: 'INFORMATION' }} />
            <Body {...{ text: 'About Us', className: bodyClassName }} />
            <Body {...{ text: 'Contact Us', className: bodyClassName }} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <Title {...{ text: 'USEFULL LINKS' }} />
            <Body {...{ text: 'Terms & Conditions', className: bodyClassName }} />
            <Body {...{ text: 'Return & Exchange', className: bodyClassName }} />
            <Body {...{ text: 'Privacy Policy', className: bodyClassName }} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <Title {...{ text: 'CONTACT US' }} />
            <Body {...{ text: 'Sector 21 Gurgaon', className: bodyClassName }} />
            <Body {...{ text: '1800 999 2121', className: bodyClassName }} />
            <Body {...{ text: 'help@littletags.com', className: bodyClassName }} />
          </div>
        </div>
      </div>
      <div className="copyright py-2">
        <Body {...{ text: 'Copyright © 2021 Little Tags. All right reserved.' }} />
      </div>
    </div>
  );
};

export default Footer;
