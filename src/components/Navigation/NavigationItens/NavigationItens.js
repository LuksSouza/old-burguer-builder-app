import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItens.module.css';

const NavigationItens = () => (
    <ul className={classes.NavigationItens}>
        <NavigationItem link="/burguer">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default NavigationItens;