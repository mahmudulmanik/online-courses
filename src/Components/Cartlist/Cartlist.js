import React from 'react';
import './Cartlist.css';

const Cartlist = (props) => {
    
    const { image, instructor, name, price } = props.cart;
    return (
        <div className="cart-summary shadow rounded mb-4">
            <div>
                <img  src={image} alt="" />
            </div>

            <div>
                <h6>{name}</h6>
                <p className="text-secondary">instructor: {instructor} </p>
                <p>price: <span className="text-info font-weight-bold">${price}</span></p>
                <hr />
            </div>

        </div>
    );
};

export default Cartlist;