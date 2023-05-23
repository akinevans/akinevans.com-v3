import React from "react";
import { motion } from "framer-motion";
import about_title from "../assets/images/about-title-dark-mode.svg";
import resume_btn_underline from "../assets/icons/resume-btn-underline.svg";
import about_squiggle_line from "../assets/icons/about-me-squiggle-dark-mode.svg";
import resume_doc from "../assets/AkinEvansResume.pdf";
import "./About.css";

export default function About() {
  return (
    <article className='about-outer-wrapper' id='about-component'>
      <div className='about-inner-wrapper'>
        <div className='about-title-wrapper'>
          <img src={about_title} alt='about' />
        </div>
        <div className='about-text-wrapper'>
          <p>
            <span className='highlight'>Placeholder text </span> dolor sit amet,
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
          <motion.div
            className='resume-btn-underline'
            initial={{ x: 0 }}
            animate={{
              translateX: [0, -40, 0],
              type: "spring",
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img
              className='resume-btn-underline'
              src={resume_btn_underline}
              alt='decorative'
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
}
