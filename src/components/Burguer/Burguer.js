import React from 'react';

import BurguerIngredient from './BurguerIngredients/BurguerIngredient';
import classes from './Burguer.module.css';

const Burguer = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurguerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurguerIngredient type="bread-top" />
            {transformedIngredients}
            <BurguerIngredient type="bread-bottom" />
        </div>
    );

};

export default Burguer;