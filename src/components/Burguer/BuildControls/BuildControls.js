import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' }
];

const BuildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((ctrl, i) => (
                <BuildControl
                    key={ctrl.label + i}
                    label={ctrl.label}
                    added={() => { props.ingredientAdded(ctrl.type) }}
                    removed={() => { props.ingredientRemoved(ctrl.type) }} 
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
};

export default BuildControls;