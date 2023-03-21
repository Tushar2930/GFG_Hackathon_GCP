import React from "react";
import "./ContactComponent.css";

function ContactComponent() {
  return (
    <div class="row mt-5">
      <div class="col-7" style={{ paddingRight: "1.7%", paddingLeft: "1.7%" }}>
        <h3>Contact Form</h3>
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

      <div class="col-5" style={{ paddingRight: "1.7%", paddingLeft: "1.7%" }}>
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
