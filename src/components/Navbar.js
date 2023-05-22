import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className='nav-outer-wrapper'>
      <div className='nav-inner-wrapper'>
        <div className='nav-link-wrapper'>
          <Link
            to='hero-component'
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            href='/#'
            className='link nav-link'
          >
            HOME
          </Link>
          <Link
            to='projects-component'
            spy={true}
            smooth={true}
            offset={-25}
            duration={800}
            href='/#'
            className='link nav-link'
          >
            PROJECTS
          </Link>
          <Link
            to='about-component'
            spy={true}
            smooth={true}
            offset={-75}
            duration={800}
            href='/#'
            className='link nav-link'
          >
            ABOUT
          </Link>
          <a
            href='https://github.com/akinevans'
            target='_blank'
            rel='noreferrer'
            className='nav-link'
          >
            GITHUB
          </a>
          <Link
            to='contact-component'
            spy={true}
            smooth={true}
            offset={-260}
            duration={800}
            href='/#'
            className='link nav-link'
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
