"use client";

import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-column">
          <h1 className="footer-logo">NEURA AI</h1>
          <p className="footer-desc">
            NEURA AI is the hub for AI enthusiasts. Join us.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com/neura.mitblr" target="_blank" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="http://linkedin.com/company/neura-ai-mitblr/" target="_blank" aria-label="LinkedIn"><Linkedin size={24} /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <p>
            Email: <span className="contact-name">Riddhi (Gen Sec)</span>: riddhi.mitblr2024@learner.manipal.edu
          </p>
          <p>
            Phone: <span className="contact-name">Riddhi (Gen Sec)</span>: +91 73880 68555
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} NEURA AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
