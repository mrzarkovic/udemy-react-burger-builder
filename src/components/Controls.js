import React from 'react';

import classes from './Controls.css';
import Control from './controls/Control';

const controls = [
  {
    label: 'Salad',
    type: 'salad'
  },
  {
    label: 'Meat',
    type: 'meat'
  },
  {
    label: 'Bacon',
    type: 'bacon'
  },
  {
    label: 'Cheese',
    type: 'cheese'
  }
];

const buildControls = props => {
  return (
    <div className={classes.Controls}>
      <p>
        Total price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map(control => (
        <Control
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          key={control.type}
          label={control.label}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        disabled={!props.purchasable}
        className={classes.OrderButton}
        onClick={props.order}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
