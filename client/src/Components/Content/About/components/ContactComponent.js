import React from "react";
import "./ContactComponent.css";

function ContactComponent() {
  return (
    <div class="row">   
      <div class="col-lg-7 col-sm-12" style={{ paddingRight: "1.7%", paddingLeft: "1.7%" }} id="Ci">
        <h3>Contact Us</h3>
        <form>
          <input
            name="name"
            type="text"
            class="feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            class="feedback-input"
            placeholder="Email"
          />
          <input
            name="subject"
            type="text"
            class="feedback-input"
            placeholder="Subject"
          />
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Comment"></textarea>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div class="col-lg-5 col-sm-12" style={{ paddingRight: "1.7%", paddingLeft: "1.7%" }} id="Cj">
        <div class="row my-2">
          <h3>Information</h3>
        </div>
        <div class="row my-2">
          <h6>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Nulla porttitor accumsan tincidunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec rutrum congue leo eget malesuada.
          </h6>
        </div>
        <div class="row my-2">
          <div>agrokart@gmail.com</div>
        </div>
        <div class="row my-2">
          <div>IIT (BHU), Varanasi</div>
        </div>
      </div>
      </div>
      
    
  );
}

export default ContactComponent;
