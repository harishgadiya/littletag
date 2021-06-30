import { addSubscriber } from '../api/userAPIs';

const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = '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';
const SENDGRID_FROM_EMAIL_ID = 'singh.durgesh2011@gmail.com';

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendSubscriptionNotification = (emailAddress, name) => {
  const EmailSubject = 'Thanks for subscribe';
  const EmailText = 'We will send notification of latest collection and updates.';
  const EmailHtmlTemplate = `
                                      Hi ${getFirstName(name) || emailAddress},
                                      <br/><br/>
                                      We will send notifications of latest collections and updates.<br/><br/>
                                      <br/>
                                      <br/>
                                      Regards,<br/><br/>
                                      Team LittleTags ETA 
                                  `;
  addSubscriber(emailAddress);
  return sendEmail(getMessageObject(emailAddress, EmailSubject, EmailText, EmailHtmlTemplate));
};

export const sendOrderNotification = (emailAddress, name, products) => {
  const EmailSubject = 'Thanks for purchase';
  const EmailText = 'Ordered products are';
  const EmailHtmlTemplate = `
                                      Hi ${getFirstName(name) || emailAddress},
                                      <br/><br/>
                                      Thanks for purchase with us. Your order details are: <br/><br/>
                                      <br/>
                                      <ol>
                                      ${products?.map((product) => `<li>${product?.name}</li>`)}
                                      </ol>
                                      <br/>
                                      Regards,<br/><br/>
                                      Team LittleTags ETA 
                                  `;
  addSubscriber(emailAddress);
  return sendEmail(getMessageObject(emailAddress, EmailSubject, EmailText, EmailHtmlTemplate));
};

const getMessageObject = (emailAddress, subject, text, htmlContent) => {
  return {
    to: emailAddress,
    from: SENDGRID_FROM_EMAIL_ID, // Use the email address or domain you verified above
    subject,
    text,
    html: htmlContent,
  };
};

const sendEmail = (messageObject) => {
  return new Promise((res, rej) => {
    sgMail.send(messageObject).then(
      () => {
        console.log('Email sent');
        res('Email sent');
      },
      (error) => {
        console.error(error);
        rej('Something went wrong: ', error);
        if (error?.response) {
          console.error(error?.response?.body);
        }
      },
    );
  });
};

const getFirstName = (name) => name?.split(' ')?.[0];
