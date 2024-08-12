import React, { useRef } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';


const ContactFormTest = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('XXXXX', 'contact_form', form.current, {
        publicKey: 'bb8-glF2nFNvLX5LJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactFormTest;