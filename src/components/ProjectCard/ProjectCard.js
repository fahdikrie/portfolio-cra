import React from 'react';

import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {
  return (
    <div className={classes.ProjectCard}>
      <div className={classes.ProjectCardHeader}>
        <img className={classes.ProjectCardImg} src={props.img} alt='siput'></img>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>

      <div className={classes.ProjectCardStacks}>
        <p>React | Django | HTML | CSS</p>
      </div>
    </div>
  )
}

export default ProjectCard;