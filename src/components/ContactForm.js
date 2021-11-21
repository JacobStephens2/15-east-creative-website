import * as React from "react";
import Container from "react-bootstrap/Container";

const ContactForm = () => {
  return (
    <Container className="contact-container">
      <a id="contact-form" className="anchor"></a>
      <form action="/api/sendgrid" method="POST">
        {/* First Name */}
        <div className="form-field">
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="name"
          >
            First Name
          </label>
          <input name="name" id="name" type="text" />
        </div>

        {/* Last Name */}
        <div className="form-field">
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input name="last_name" id="last_name" type="text" />
        </div>

        {/* Email */}
        <div className="form-field">
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="email"
          >
            Email Address
          </label>
          <input name="email" id="email" type="email" required />
        </div>

        {/* Business Name */}
        <div className="form-field">
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="business_name"
          >
            Your Business Name
          </label>
          <input name="business_name" id="business_name" type="text" />
        </div>

        {/* Location */}
        <div className="form-field">
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="location"
          >
            Your Location
          </label>
          <input name="location" id="location" type="text" />
        </div>

        {/* Assistance desired checkboxes */}
        <div className="form-field">
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="location"
          >
            Check all that you are looking for assistance with
          </label>
          <input
            name="checkbox_photography"
            id="checkbox_photography"
            type="checkbox"
            value="Photography / Art Book"
          />
          <label for="checkbox_photography">Photography / Art Book</label>
          <input
            name="checkbox_catalog"
            id="checkbox_catalog"
            type="checkbox"
            value="Catalog"
          />
          <label for="checkbox_catalog">Catalog</label>
          <input
            name="checkbox_magazine"
            id="checkbox_magazine"
            type="checkbox"
            value="Magazine"
          />
          <label for="checkbox_magazine">Magazine</label>
          <input
            name="checkbox_printcollateral"
            id="checkbox_printcollateral"
            type="checkbox"
            value="Print Collateral"
          />
          <label for="checkbox_printcollateral">Print Collateral</label>
          <input
            name="checkbox_web"
            id="checkbox_web"
            type="checkbox"
            value="Website Design/Development"
          />
          <label for="checkbox_web">Website Design/Development</label>
          <input
            name="checkbox_other"
            id="checkbox_other"
            type="checkbox"
            value="Other"
          />
          <label for="checkbox_other">Other</label>
        </div>

        {/* Message */}
        <div style={{ marginBottom: `24px` }}>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="message"
          >
            Tell me about your project.
          </label>
          <textarea
            name="message"
            id="message"
            type="text"
            rows="10"
            cols="30"
          />
        </div>

        {/* Source */}
        <div style={{ marginBottom: `24px` }}>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="source"
          >
            How did you hear about 15 East?
          </label>
          <textarea name="source" id="source" type="text" rows="10" cols="30" />
        </div>

        <div>
          <button>SEND MESSAGE</button>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
