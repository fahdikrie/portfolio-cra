import React from 'react';

import classes from './NavigationBar.module.css'
;
const NavigationBar = () => {
  return (
    <div className={classes.NavigationBar}>
      <ul className={classes.NavItems}>
        <li className={classes.NavItem}>activities</li>
        <li className={classes.NavItem}>blog</li>
      </ul>
    </div>
  )
}

export default NavigationBar;