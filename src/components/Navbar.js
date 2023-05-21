import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className='nav-outer-wrapper'>
      <div className='nav-inner-wrapper'>
        <div className='nav-link-wrapper'>
          <a href='/#' className='nav-link active'>
            HOME
          </a>
          <a href='/#' className='nav-link'>
            PROJECTS
          </a>
          <a href='/#' className='nav-link'>
            ABOUT
          </a>
          <a
            href='https://github.com/akinevans'
            target='_blank'
            rel='noreferrer'
            className='nav-link'
          >
            GITHUB
          </a>
          <a href='/#' className='nav-link'>
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
