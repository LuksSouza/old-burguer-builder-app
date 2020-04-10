import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = (props) => {

    return (
        <div className={classes.BuildControl}>
            <p className={classes.Label}>{props.label}</p>
            <button className={classes.Less} onClick={props.removing}>Less</button>
            <button className={classes.More} onClick={props.adding}>More</button>
        </div>
    );

};

export default BuildControl;