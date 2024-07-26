import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';


const ContactFormASAK = () => {
  const [inputs, setInputs] = useState({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { t } = useTranslation('contactform');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {

    e.preventDefault();
    // EmailJS Service ID, template ID and Public Key
    const serviceId = 'service_kxo6ovl';
    const templateId = 'template_7crj0ki';
    const publicKey = 'bb8-glF2nFNvLX5LJ';

  

  const templateParams = {
    from_name: inputs.name,
    from_email: inputs.email,
    to_name: 'Magic',
    message: inputs.message, 

  }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response)=> {
    console.log('Email sent successfully!', response);
    setName('');
    setEmail('');
    setMessage('');
  })
  .catch((error) => {
    console.error('Error sending email', error);
  })

}

  return (
    <form onSubmit={handleSubmit}
      name="contact-form"
      id="contact-form"
      action="php/contact.php"
      method="POST"
    >
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
          value={inputs.name}
          onChange={handleInputChange}
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
          value={inputs.email}
          onChange={handleInputChange}
        />
        <label htmlFor="email">{t('contactform.email')}</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <input
          type="text"
          name="subject"
          className="form-control"
          id="subject"
          placeholder="Your Subject"
          value={inputs.subject}
          onChange={handleInputChange}
        />
        <label htmlFor="subject">{t('contactform.betreff')}</label>
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
          value={inputs.message}
          onChange={handleInputChange}
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
