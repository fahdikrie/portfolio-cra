import React, { useState, useEffect } from 'react';
import TinySlider from "tiny-slider-react";

import classes from './Homepage.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Projects } from '../../components/ProjectCard/ProjectData';
import SoloProjectCard from '../../components/SoloProjectCard/SoloProjectCard';
import { SoloProjects } from '../../components/SoloProjectCard/SoloProjectData';

import arrowIcon from '../../assets/chevron-arrow.svg';
import swipeLeft from '../../assets/swipe-left.svg';

const Homepage = (props) => {

  const [displayIndex, setDisplayIndex] = useState(1);
  // Declare a new state variable with the "useState" Hook
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
        the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
        effect to only run when the component mounts, and not each time it updates.
        We only want the listener to be added once */
  }, []);

  const settings = {
    nav: false,
    mouseDrag: true,
    loop: false,
    items: 1,
    gutter: 3,
    controls: false,
    responsive: {
      500: {
        items: 2
      },
      768: {
        items: 3
      },
    }
  };

  let ts = null;
  const onGoTo = dir => {
    ts.slider.goTo(dir);
    console.log(ts.slider.getInfo())
    let index = ts.slider.getInfo().displayIndex;
    setDisplayIndex(index)
  }

  const numberOfItems = (
    width > 768
      ? 3
      : width > 500
        ? 2
        : 1
  );
  const maxDisplayIndex = SoloProjects.length - numberOfItems + 1;
  const hideArrowLeft = displayIndex === 1;
  const hideArrowRight = displayIndex === maxDisplayIndex;
  const displayNone = width < breakpoint;

  return (
    <div className={classes.Homepage}>
      <section className={classes.Header}>
        <h1><span>badi<span className={classes.purple}>,</span></span> <br/>
        <span>at your service<span className={classes.purple}>!</span></span></h1>
      </section>

      <section className={classes.About}>
        <div className={classes.innerAbout}>
        <h3><span>A 19 years old sophomore student majoring CS at the University of Indonesia</span> <br/><br/>
        <span>Fahdii is very passionate when it comes to taking nap and watching movies</span> <br/><br/>
        <span>He also loves spending his time watching movies, especially the thriller/mystery ones</span></h3>
        </div>
      </section>

      <section className={classes.Projects}>
        <div className={classes.MainProjects}>
          <h2>Projects I've Participated in<span className={classes.purple}>.</span></h2>

          <div className={classes.MainProjectsCardWrapper}>
            {Projects.map(el => (
              <ProjectCard
                key={el.id}
                image={el.image}
                name={el.name}
                time={el.time}
                desc={el.desc}
                stacks={el.stacks} />
            ))}
          </div>
        </div>

        <div className={classes.SoloProjects}>
          <h2>Selected Solo Projects<span className={classes.purple}>.</span></h2>

          <div className={classes.SoloProjectsCardWrapper}>
            <img
              className={`${classes.ArrowLeft} ${hideArrowLeft ? classes.hide : ''} ${displayNone ? classes.none : ''}`}
              src={arrowIcon}
              alt='arrow-left'
              onClick={() => onGoTo('prev')}
            />
              <TinySlider
                className={classes.TinySlider}
                ref={refts => ts = refts}
                settings={settings}
                onClick={event => console.log(event)}
              >
                {SoloProjects.map(el => (
                  <SoloProjectCard
                    key={el.id}
                    image={el.image}
                    name={el.name}
                    url={el.url}
                    repo={el.repo}
                    time={el.time}
                    desc={el.desc}
                    stacks={el.stacks} />
                ))}
              </TinySlider>
              <img
                className={
                  `${classes.ArrowRight}
                   ${hideArrowRight ? classes.hide : ''}
                   ${displayNone ? classes.none : ''}`}
                src={arrowIcon}
                alt='arrow-right'
                onClick={() => onGoTo('next')}
              />
          </div>
          <div className={`${classes.SwipeLeft}`}>
            <img
              src={swipeLeft}
              alt='swipe-left'
            />
            <h3>Swipe Left!</h3>
          </div>
        </div>
      </section>

      <section className={classes.TechStacks}>
        {/* <div className={classes.TechStacksComfortable}>
          <h2>Stacks/Frameworks I've used in My Projects<span className={classes.purple}>.</span></h2>
        </div> */}
        <div className={classes.ToolsUsed}>
          <h2>Tools that I Frequently Use<span className={classes.purple}>.</span></h2>
        </div>
        {/* <div className={classes.TechStacksUsed}>
          <h2>Stacks That I'm Still <br/> Working On To Get Better<span className={classes.purple}>.</span></h2>
        </div>
        <div className={classes.ToolsUsed}>
          <h2>Tools That I'm Using Frequently<span className={classes.purple}>.</span></h2>
        </div> */}
      </section>
    </div>
  )
}

export default Homepage;