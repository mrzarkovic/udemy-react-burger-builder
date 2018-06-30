import React from 'react';

import Aux from 'HOC/Auxiliary';
import classes from './Layout.css';

const Layout = props => {
  return (
    <Aux>
      Header
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
