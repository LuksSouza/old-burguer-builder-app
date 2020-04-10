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
            {controls.map((ctrl, i) => (
                <BuildControl
                    key={ctrl.label + i}
                    label={ctrl.label}
                    adding={() => { props.addingIngredientsHandler(ctrl.type) }}
                    removing={() => { props.removingIngredientsHandler(ctrl.type) }} />
            ))}
        </div>
    );
};

export default BuildControls;