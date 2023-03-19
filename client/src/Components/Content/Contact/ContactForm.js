import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactno: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    e.target.id === "submit" && console.log(form);
    e.target.id === "cancel" && console.log("cancel");
  };

  return (
    <div className="contact-form-container">
      <div class="screen">
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
          </div>
          <div class="screen-body-item">
            <div class="app-form">
              <div class="app-form-group">
                <input
                  name="name"
                  value={form.name}
                  class="app-form-control"
                  placeholder="NAME"
                  onChange={(e) => handlechange(e)}
                />
              </div>
              <div class="app-form-group">
                <input
                  name="email"
                  value={form.email}
                  class="app-form-control"
                  placeholder="EMAIL"
                  onChange={(e) => handlechange(e)}
                />
              </div>
              <div class="app-form-group">
                <input
                  name="contactno"
                  value={form.contactno}
                  class="app-form-control"
                  placeholder="CONTACT NO"
                  onChange={(e) => handlechange(e)}
                />
              </div>
              <div class="app-form-group message">
                <input
                  name="message"
                  value={form.message}
                  class="app-form-control"
                  placeholder="MESSAGE"
                  onChange={(e) => handlechange(e)}
                />
              </div>
              <div class="app-form-group buttons">
                <button
                  id="cancel"
                  class="app-form-button"
                  onClick={(e) => handleclick(e)}>
                  CANCEL
                </button>
                <button
                  class="app-form-button"
                  id="submit"
                  onClick={(e) => handleclick(e)}>
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
