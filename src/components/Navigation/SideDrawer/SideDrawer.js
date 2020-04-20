import React from 'react';

import Logo from '../../Logo/Logo';
import NavegationItens from '../NavigationItens/NavigationItens';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.close} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavegationItens />
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;