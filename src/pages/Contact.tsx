import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css"; 

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-inner">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Have questions, ideas, or want to collaborate? <br />
          We’d love to hear from you!
        </p>

        <div className="contact-links">
          <a
            href="https://instagram.com/neura.mitblr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn instagram"
          >
            <FaInstagram /> Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/neura-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn linkedin"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="mailto:riddhi.mitblr2024@learner.manipal.edu"
            className="contact-btn email"
          >
            <FaEnvelope /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
