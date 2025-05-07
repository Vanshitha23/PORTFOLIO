import React from "react";
import "./Contact.css";
// import Footer from './components/Footer';
const Contact: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h1>Let’s build <br />something amazing<br />together.</h1>
        <p className="contact-tagline">Have an idea or collaboration in mind? Let's connect.</p>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <Footer/> */}
    </div>
    
  );
};

export default Contact;
