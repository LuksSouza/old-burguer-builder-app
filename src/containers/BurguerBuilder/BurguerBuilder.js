import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';

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
        disabledInfo: {
            cheese: true,
            bacon: true,
            meat: true,
            salad: true
        },
        totalPrice: 0,
        purchaseable: false,
        purchading: false
    }

    purchaseHandler = () => {
        this.setState({
            purchading: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchading: false
        });
    }

    purchaseContinued = () => {
        alert('This functionality will be working soon!');
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        let updatedTotal = this.state.totalPrice + INGREDIENT_PRICES[type];

        this._updateState(type, updatedCount, updatedTotal);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] === 0) {
            return;
        }

        const updatedCount = this.state.ingredients[type] - 1;
        let updatedTotal = this.state.totalPrice - INGREDIENT_PRICES[type];

        this._updateState(type, updatedCount, updatedTotal);
    }

    _updateState = (type, updatedCount, updatedTotal) => {
        let updatedIngredients = {
            ...this.state.ingredients
        }

        let updatedDisabledInfo = {
            ...this.state.disabledInfo
        }

        updatedIngredients[type] = updatedCount;

        if (updatedCount <= 0) {
            updatedDisabledInfo[type] = true;
            updatedCount = 0.0;
        } else {
            updatedDisabledInfo[type] = false;
        }

        const sum = Object.keys(updatedIngredients)
            .map(igKey => {
                return updatedIngredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        let updatedPurchaseable = false;
        if (sum > 0) {
            updatedPurchaseable = true;
        }

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotal,
            disabledInfo: updatedDisabledInfo,
            purchaseable: updatedPurchaseable
        });
    }

    render() {

        return (
            <Aux>
                <Modal show={this.state.purchading} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinued} />
                </Modal>
                <Burguer ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={this.state.disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }

}

export default BurguerBuilder;