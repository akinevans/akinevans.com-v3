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
            <span className='highlight'>👋🏾 Hi, I’m Akin </span> (Ah-Keen), a
            dedicated and passionate Front-End developer based in Southern
            California. With a Certificate in Computer Programming from Moreno
            Valley College and a bachelor's degree in Business, I bring a unique
            blend of technical skills and business acumen to my work.
          </p>
          <p>
            Throughout my career, I have honed my expertise in web development,
            tech support, and assisting others. With over a decade of experience
            in customer service, I have cultivated strong problem-solving
            abilities, a keen eye for detail, and exceptional communication
            skills. Currently, my primary focus is on building meaningful
            applications that contribute to the betterment of the human
            condition, while also empowering and educating others in the world
            of technology.
          </p>
          <p>
            Beyond my professional endeavors, I find joy in various activities.
            I am an avid runner, participating in marathons for charities. I
            also indulge my wanderlust by traveling to different parts of the
            world. When I'm not coding or exploring, you can find me collecting
            comic books and strumming away on my guitar.
          </p>
          <p>
            With a comprehensive skill set encompassing front-end web
            development, software engineering, tech support, customer service,
            and problem-solving, I am well-equipped to tackle diverse challenges
            and drive innovative solutions. I thrive on educating and guiding
            others, fostering a collaborative environment that encourages growth
            and learning.
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
