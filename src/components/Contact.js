import React from "react";
import contact_title from "../assets/images/contact-title-dark-mode.svg";
import contact_triangle from "../assets/icons/contact-triangles.svg";
import email_icon from "../assets/icons/email-icon.svg";
import linkedin_icon from "../assets/icons/linkedin.svg";
import github_icon from "../assets/icons/github.svg";
import twitter_icon from "../assets/icons/twitter.svg";
import "./Contact.css";

export default function Contact() {
  return (
    <footer className='contact-outer-wrapper'>
      <div className='contact-inner-wrapper'>
        <div className='contact-title-wrapper'>
          <img src={contact_title} alt='' />
        </div>
        {/* BUILD CONTACT FORM HERE */}
        <div className='contact-icons-outer-wrapper'>
          <a
            className='email-wrapper'
            href='mailto: akinevans@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <img src={email_icon} alt='' />
            <h5 className='icon-text'>E-Mail</h5>
          </a>
          <a
            className='linkedin-wrapper'
            href='https://www.linkedin.com/in/akinevans/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedin_icon} alt='' />
            <h5 className='icon-text'>LinkedIn</h5>
          </a>
          <a
            className='github-wrapper'
            href='https://github.com/akinevans'
            target='_blank'
            rel='noreferrer'
          >
            <img src={github_icon} alt='' />
            <h5 className='icon-text'>Github</h5>
          </a>
          <a
            className='twitter-wrapper'
            href='https://twitter.com/akinCodes'
            target='_blank'
            rel='noreferrer'
          >
            <img src={twitter_icon} alt='' />
            <h5 className='icon-text'>Twitter</h5>
          </a>
          <img
            className='purple-triangle'
            src={contact_triangle}
            alt='decorative'
          />
        </div>
      </div>
    </footer>
  );
}
