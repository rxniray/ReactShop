// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onBuyClick }) => (

    

    <div className="product-list">
        {products.map((product, index) => (
            <ProductCard key={index} product={product} onBuyClick={() => onBuyClick(product)} />
        ))}
    </div>
);

export default ProductList;

