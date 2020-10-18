import React from 'react';

import classes from './SoloProjectCard.module.css';

const SoloProjectCard = ({
  image,
  name,
  repo,
  url,
  time,
  desc,
  stacks
}) => {
  return (
    <div className={classes.SoloProjectCard}>
      <div className={classes.SoloProjectCardHeader}>
        <a
          href={url !== "" ? url : "#0"}
          target={url !== "" ? "_blank" : ""}>
          <img
            className={classes.SoloProjectCardImg}
            src={image}
            alt='siput'/>
        </a>
        <div className={classes.SoloProjectCardTitle}>

        </div>
      </div>

      {/* <div className={classes.SoloProjectCardStacks}>
        <p>{stacks.join(" ⋅ ")}</p>
      </div> */}
    </div>
  )
}

export default SoloProjectCard;