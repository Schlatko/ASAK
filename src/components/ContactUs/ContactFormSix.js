import React, { useState } from "react";

const ContactFormSix = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <form
      name="contact-form"
      id="contact-form"
      action="php/contact.php"
      method="POST"
      className="mt-50"
    >
      <div className="messages"></div>
      <div className="form-floating">
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          required="required"
          placeholder="Ihr Name"
          data-error="Ihr Name ist notwendig"
          value={inputs.name}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Name</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Ihre Email"
          required="required"
          data-error="Bitte geben Sie eine gültige Mail an"
          value={inputs.email}
          onChange={handleInputChange}
        />
        <label htmlFor="email">E-Mail</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <input
          type="phone"
          name="phone"
          className="form-control"
          id="phone"
          placeholder="Telefonnummer"
          value={inputs.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Telefonnummer</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <textarea
          name="message"
          className="form-control"
          id="message"
          rows="7"
          placeholder="Ihre Nachricht"
          required
          data-error="Hinterlassen Sie uns eine Nachricht"
          value={inputs.message}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="message">Nachricht</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <button type="submit" name="submit" className="btn btn-color btn-circle">
        Abschicken
      </button>
    </form>
  );
};

export default ContactFormSix;
