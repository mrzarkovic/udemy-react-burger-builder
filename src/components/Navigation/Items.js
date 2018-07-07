import React from 'react';

import classes from './Items.css';
import Item from './Item';

const items = () => {
    return (
        <ul className={classes.Items}>
            <Item link="/" active>
                Burger Builder
            </Item>
            <Item link="/">Checkout</Item>
        </ul>
    );
};

export default items;
