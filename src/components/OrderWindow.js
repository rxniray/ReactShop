// OrderWindow.js
import React, { useState } from 'react';

const OrderWindow = ({ product, onClose, onSubmit }) => {
    const [father, setFather] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');

    const [address, setAddress] = useState('');

    const [cardNumber, setCardNumber] = useState('');
    const [dateCard, setDateCard] = useState('');
    const [cvvCard, setCvvCard] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        const details = {
            father: father,
            first: first,
            last: last,
            
            address: address,

            cardNumber: cardNumber,
            dateCard: dateCard,
            cvvCard: cvvCard
        };
        onSubmit(details);
        onClose();
    };

    return (
        <div className="order-window">
            <h2>Order Details</h2>

            <img className="product-oreder" src={product.image} alt={product.name} />

            <p>Product: {product.name}</p>
            <p>Price: ${product.price}</p>

            <form onSubmit={handleSubmit} className="oreder-window">
                
                <label htmlFor="first">First name:</label>
                <input type="text" id="first" value={first} onChange={(e) => setFirst(e.target.value)} required />
                
                <label htmlFor="last">Last name:</label>
                <input type="text" id="last" value={last} onChange={(e) => setLast(e.target.value)} required />

                <label htmlFor="father">Father name:</label>
                <input type="text" id="father" value={father} onChange={(e) => setFather(e.target.value)} required />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

                <label htmlFor="cardNumber">Card number:</label>
                <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                <div className='order-card'>

                    <label htmlFor="dateCard">Date card:
                    <input type="text" id="dateCard" value={dateCard} onChange={(e) => setDateCard(e.target.value)} required />
                    </label>
                    
                    <label htmlFor="cvvCard">CVV card:
                    <input type="text" id="cvvCard" value={cvvCard} onChange={(e) => setCvvCard(e.target.value)} required />
                    </label>

                </div>
                

                <button type="submit">Confirm Order</button>
            </form>
            <button className='close-button' onClick={onClose}>Close</button>
        </div>
    );
};

export default OrderWindow;
