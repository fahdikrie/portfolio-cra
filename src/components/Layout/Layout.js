import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import NavigationBar from './NavigationBar/NavigationBar';
import VantaLayout from './VantaLayout/VantaLayout';

const Layout = (props) => {
  return (
    <Auxiliary>
      {/* <VantaLayout/> */}
      <NavigationBar/>
      {props.children}
    </Auxiliary>
  )
}

export default Layout;

