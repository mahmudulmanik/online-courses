import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;
    const totalPrice = cart.reduce((total, pd) => (total + pd.price), 0);

    return (
        <div className="cart shadow rounded mb-4">
            <h3 className="text-secondary"> Courses in Cart: {cart.length}</h3>
            <h3 className="text-secondary">Total Amount: </h3>
            <h1>${totalPrice}</h1>
            <button className="btn btn-danger btn-block" onClick={() => alert(' Thank You For Purchasing From Us!!!')}>Checkout</button>
        </div>
    );
};

export default Cart;