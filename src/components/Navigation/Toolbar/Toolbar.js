import React from 'react';

import NavigationItens from '../NavigationItens/NavigationItens';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <div className={classes.Toolbar}>
        <DrawerToggle click={props.clicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItens />
        </nav>
    </div>
);

export default Toolbar;