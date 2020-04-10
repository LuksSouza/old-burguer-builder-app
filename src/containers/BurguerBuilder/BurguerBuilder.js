import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3,
    salad: 0.5
}

class BurguerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        },
        totalPrice: 0
    }

    addingIngredientsHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1;
        const newTotal = this.state.totalPrice + INGREDIENT_PRICES[type];

        this._updateIngredientsQuantity(type, newCount, newTotal);
    }

    removingIngredientsHandler = (type) => {
        if (this.state.ingredients[type] === 0) {
            return;
        }

        const newCount = this.state.ingredients[type] - 1;
        const newTotal = this.state.totalPrice - INGREDIENT_PRICES[type];

        this._updateIngredientsQuantity(type, newCount, newTotal);
    }

    _updateIngredientsQuantity = (type, value, updatedTotal) => {
        let updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = value;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotal
        });

        console.log(updatedTotal);
    }

    render() {

        return (
            <Aux>
                <Burguer ingredients={this.state.ingredients} />
                <BuildControls 
                    addingIngredientsHandler={this.addingIngredientsHandler}
                    removingIngredientsHandler={this.removingIngredientsHandler} />
            </Aux>
        );
    }

}

export default BurguerBuilder;