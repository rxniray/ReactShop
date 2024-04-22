// OrderSummary.js
import React from 'react';

const OrderSummary = ({ product, first,last, father, address, cardNumber, cvvCard, dateCard  }) => (
    
    <div className="order-summary">
        <h2>Bill</h2>
        <div className="product-order">
            <img  src={product.image} alt={product.name} />
            <div className='description-prod'>
                <p>Product: {product.name}</p>
                <p>Price: ${product.price}</p>
            </div>
        </div>
        
        <p>First name: {first}</p>
        <p>Last name: {last}</p>
        <p>Father name: {father}</p>

        <p>Address name: {address}</p>
        <p>{cardNumber}</p>
    </div>
);

export default OrderSummary;
