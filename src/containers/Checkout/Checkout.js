import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: {
            cheese: 1,
            bacon: 1,
            meat: 1,
            salad: 1
        },
        price: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);

        const checkoutIngredients = {};
        let price = 0;

        for (let param of query.entries()) {
            // [ingredient],[quantity]
            if (param[0] === 'price') {
                price = +param[1];
                continue;
            }

            checkoutIngredients[param[0]] = +param[1];
        }

        this.setState({ ingredients: checkoutIngredients, price: price });
    }

    onCheckoutContinueHandler = () => {
        console.log(this.props);
        this.props.history.replace("/checkout/contact-data");
    }

    onCheckoutCancelHandler = () => {
        console.log(this.props);
        this.props.history.goBack();
    }

    render() {
        return (
            <Fragment>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    continue={this.onCheckoutContinueHandler}
                    cancel={this.onCheckoutCancelHandler} />
                <Route 
                    path={`${this.props.match.path}/contact-data`}
                    render={() => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...this.props} /> } />
            </Fragment>
        );
    }

}

export default Checkout;