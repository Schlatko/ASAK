import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const ContactFormASAK = () => {
  


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState(false);
  const [alertContent, setAlertContent] = useState(false);
  const [open, setOpen] = useState(false);
  

  const { t } = useTranslation('contactform');
  

  emailjs.init({
    publicKey: 'bb8-glF2nFNvLX5LJ',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'user_email',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });
  
  const handleSubmit = (e) => {

    e.preventDefault();
    // EmailJS Service ID, template ID and Public Key
    const serviceId = 'service_kxo6ovl';
    const templateId = 'contact_form';
    const publicKey = 'bb8-glF2nFNvLX5LJ';

  

  const templateParams = {
    user_name: name,
    user_email: email,
    message: message, 

  };
  

  emailjs.send(serviceId, templateId, templateParams)
  .then((response)=> {
    console.log('Email sent successfully!', response);
    setName('');
    setEmail('');
    setMessage('');
    setAlertContent(t('contactform.alertsuc'));
    setSeverity('success');
    setOpen(true);
    

  })
  .catch((error) => {
    console.log(serviceId, templateId, templateParams)
    console.error('Error sending email', error);
    setAlertContent(t('contactform.alerterr'));
    setSeverity('error');
    setOpen(true);
  })

}

  return (
    
    <form onSubmit={handleSubmit}
      name="contact-form"
      id="contact-form"
      
    >
  <Snackbar
  open={open}
  autoHideDuration={5000}
  onClose={() => setOpen(false)} 
  sx={{ height: "100%" }}
   anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
     <Alert
    onClose={() => setOpen(false)} 
    severity={severity}
    variant="filled"
    sx={{ width: '100%' }}
    
  >
    {alertContent}
  </Alert>
    </Snackbar>
      <div className="messages"></div>
      <div className="form-floating">
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          required="required"
          placeholder="Your Name"
          data-error="Your Name is Required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">{t('contactform.name')}</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Your Email"
          required="required"
          data-error="Please Enter Valid Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">{t('contactform.email')}</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      
      <div className="form-floating">
        <textarea
          name="message"
          className="form-control"
          id="message-input-simple"
          rows="7"
          placeholder="Your Message"
          required
          data-error="Please, Leave us a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <label htmlFor="message">{t('contactform.nachricht')}</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <button type="submit" name="submit" className="btn btn-color btn-circle">
      {t('contactform.button')}
      </button>
     
     
    </form>
  );
};

export default ContactFormASAK;
