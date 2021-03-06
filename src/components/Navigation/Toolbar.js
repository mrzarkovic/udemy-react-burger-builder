import React from 'react';

import classes from './Toolbar.css';
import Logo from 'Components/Logo';
import Items from './Items';
import DrawerToggle from './sideDrawer/DrawerToggle';

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <Items />
            </nav>
        </header>
    );
};

export default toolbar;
