import React from 'react';

import classes from './Logo.module.css';
import Burguer from '../../assets/images/burguer-icon.png';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={Burguer} alt="MyBurguer" />
    </div>
);

export default Logo;