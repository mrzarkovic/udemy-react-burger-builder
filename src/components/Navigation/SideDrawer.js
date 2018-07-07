import React from 'react';

import Logo from 'Components/Logo';
import Items from 'Components/Navigation/Items';
import classes from './SideDrawer.css';
import Backdrop from 'Components/UI/Backdrop';
import Aux from 'HOC/Auxiliary';

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <Items />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
