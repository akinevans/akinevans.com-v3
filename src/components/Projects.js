import React, { useState } from "react";
import project_title from "../assets/images/projects-title-dark-mode.svg";
import left_btn from "../assets/icons/left-arrow-dark-mode.svg";
import right_btn from "../assets/icons/right-arrow-dark-mode.svg";
import meditate from "../assets/images/meditate-the-world.png";
import socialsync from "../assets/images/socialsync.png";
import "./Projects.css";

export default function Projects() {
  const meditatePath = "https://akinevans.github.io/meditate-the-world/";

  const socialsyncPath = "https://akinevans.github.io/socialsync/";

  const slides = [
    {
      image: meditate,
    },
    {
      image: socialsync,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //! Write Logic for dynamically showing info for projects slideshow

  const projectInfo = [
    {
      title: "MEDITATE THE WORLD",
      description: "Landing page for a meditation studio",
      stack: (
        <div>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Vanilla CSS</li>
            <li>Framer Motion</li>
          </ul>
        </div>
      ),
    },
    {
      title: "SocialSync",
      description: "Website for an online messenger service",
      stack: (
        <div>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Vanilla CSS</li>
            <li>Framer Motion</li>
          </ul>
        </div>
      ),
    },
  ];

  function displayProjectInfo() {
    // setInterval(prevSlide, 4000);
    if (current === 0) {
      return (
        <div className='description-outer-wrapper'>
          <div className='title-wrapper'>
            <a
              href={meditatePath}
              target='_blank'
              rel='noreferrer'
              className='description-title'
            >
              {projectInfo[0].title}
            </a>
            <p className='description-text'>{projectInfo[0].description}</p>
          </div>
          <div className='techstack-wrapper'>
            <h3 className='techstack'>TECH STACK</h3>
            <div className='tech-list'>{projectInfo[0].stack}</div>
          </div>
        </div>
      );
    } else if (current === length - 1) {
      return (
        <div className='description-outer-wrapper'>
          <div className='title-wrapper'>
            <a
              href={socialsyncPath}
              target='_blank'
              rel='noreferrer'
              className='description-title'
            >
              {projectInfo[1].title}
            </a>
            <p className='description-text'>{projectInfo[1].description}</p>
          </div>
          <div className='techstack-wrapper'>
            <h3 className='techstack'>TECH STACK</h3>
            <div className='tech-list'>{projectInfo[1].stack}</div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className='projects-outer-wrapper'>
      <div className='projects-inner-wrapper'>
        <div className='projects-title-wrapper'>
          <img src={project_title} alt=' project title' />
        </div>
        <div className='slideshow-wrapper'>
          <img
            src={left_btn}
            alt='left arrow button'
            className='left-btn'
            onClick={prevSlide}
          />
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    alt='slideshow of websites in portfolio'
                    className='image'
                  />
                )}
              </div>
            );
          })}

          <img
            src={right_btn}
            alt='right arrow button'
            className='right-btn'
            onClick={nextSlide}
          />

          {/* End slideshow wrapper */}
        </div>
        {/* Auto change slides and provide appropriate text data */}
        {/* {setInterval(prevSlide, 3000)} */}
        {displayProjectInfo()}
      </div>
    </div>
  );
}
