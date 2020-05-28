import React from 'react';

import classes from './CheckoutSummary.module.css';
import Burguer from '../../Burguer/Burguer';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burguer ingredients={props.ingredients} />
            </div>
            <Button
                type="Danger"
                clicked={props.cancel}>CANCEL</Button>
            <Button
                type="Success"
                clicked={props.continue}>CONTINUE</Button>
        </div>
    );

}

export default CheckoutSummary;