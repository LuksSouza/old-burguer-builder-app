import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItens.module.css';

const NavigationItens = () => (
    <ul className={classes.NavigationItens}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavigationItens;