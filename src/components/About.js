import React from "react";
import about_title from "../images/about-title-dark-mode.svg";
import resume_btn_underline from "../icons/resume-btn-underline.svg";
import about_squiggle_line from "../icons/about-me-squiggle-dark-mode.svg";
import resume_doc from "../assets/Placeholder.pdf";
import "./About.css";

export default function About() {
  return (
    <article className='about-outer-wrapper'>
      <div className='about-inner-wrapper'>
        <div className='about-title-wrapper'>
          <img src={about_title} alt='about' />
        </div>
        <div className='about-text-wrapper'>
          <p>
            <span className='highlight'>Lorem ipsum </span> dolor sit amet,
            consectetur adipisicing elit. Est animi amet vitae rerum quidem
            eius. Officiis asperiores cum explicabo eos quo veritatis, delectus
            modi distinctio qui, ullam alias fugiat vitae beatae commodi eveniet
            rem, adipisci expedita! Possimus quasi accusamus, eum id quia ipsam
            esse expedita necessitatibus iure!
          </p>

          <p>
            Aut maiores fugiat reprehenderit repudiandae ratione reiciendis
            soluta placeat, culpa laboriosam commodi quasi nobis repellat
            sapiente? Sed hic odio vel ut adipisci! Dicta sit deserunt amet
            soluta cumque laudantium sequi velit consectetur dolores aliquid.
            Ipsam unde quasi autem explicabo laudantium, quo sint in eum enim
            nobis nisi, hic distinctio deleniti repellat eius eligendi.
          </p>
          <div className='purple-border'></div>
          <img src={about_squiggle_line} alt='' className='squiggle-line' />
        </div>
        <div className='btn-wrapper'>
          <a
            className='resume-btn'
            href={resume_doc}
            download='Akin Evans Resume'
          >
            Download Resume
          </a>
          <img
            className='resume-btn-underline'
            src={resume_btn_underline}
            alt='decorative'
          />
        </div>
      </div>
    </article>
  );
}
