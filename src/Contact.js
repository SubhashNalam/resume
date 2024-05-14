import React from "react";
import OutlookIcon from "./outlook.png";
import LinkedInIcon from "./linkedIn.png";
import WhatsappIcon from "./whatsapp.png";
import WhatsappQr from "./whatsappQr.png";

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <div className="social-media-links icon-container">
        <a href="mailto:subhashnalam@outlook.com">
          <img src={OutlookIcon} alt="Outlook" className="social-media-icon" />
        </a>
        <a href="https://www.linkedin.com/in/subhashnalam">
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className="social-media-icon"
          />
        </a>
        <a href="https://wa.me/+917032343498">
          <img
            src={WhatsappIcon}
            alt="Whatsapp"
            className="social-media-icon"
          />
        </a>
      </div>
      <img
        src={WhatsappQr}
        alt="QR-code for My Whatsapp"
        className="whatsapp-qr"
      />
    </div>
  );
}

export default Contact;
