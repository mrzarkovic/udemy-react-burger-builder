import React from 'react';

import Burger from 'Components/Burger';
import Button from 'Components/UI/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h3>Your Order Summary</h3>
      <Burger ingredients={props.ingredients} />
      <Button type="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button type="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
