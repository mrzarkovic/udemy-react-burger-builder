import React, { Component } from 'react';

import Aux from 'HOC/Auxiliary';
import Button from 'Components/UI/Button';

class OrderSummary extends Component {
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map(
            ingredient => (
                <li key={ingredient}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {ingredient}
                    </span>: {this.props.ingredients[ingredient]}
                </li>
            )
        );

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientsSummary}</ul>
                <p>
                    <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout?</p>
                <Button type="Danger" clicked={this.props.purchaseCancelled}>
                    CANCEL
                </Button>
                <Button type="Success" clicked={this.props.purchaseContinued}>
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}

export default OrderSummary;
