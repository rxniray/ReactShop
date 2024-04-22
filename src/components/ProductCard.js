// ProductCard.js
import React from 'react';

const ProductCard = ({ product, onBuyClick }) => (
    <div className="product-card">
        <div className="product-image">
            <img  src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <button className="product-button" onClick={onBuyClick}>Buy</button>
        </div>
    </div>
);

export default ProductCard;
