import React from 'react';

import Aux from 'HOC/Auxiliary';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(ingredient => (
    <li key={ingredient}>
      <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:{' '}
      {props.ingredients[ingredient]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
    </Aux>
  );
};

export default orderSummary;
