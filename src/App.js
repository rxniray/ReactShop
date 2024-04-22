// App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import OrderWindow from './components/OrderWindow';
import OrderSummary from './components/OrderSummary';
import './App.css';
import productImageA from './assets/a.png';
import productImageB from './assets/b.png';
import productImageC from './assets/c.png';


const App = () => {
    const [showOrderWindow, setShowOrderWindow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);

    const products = [
        {
            name: "Sir Ukrainskii",
            price: 19.99,
            description: "Sir Ukrainskii",
            image: productImageA
        },
        {
            name: "Kovbasa Zakarpatska",
            price: 29.99,
            description: "Kovbasa Zakarpatska",
            image: productImageB
        },
        {
            name: "Khlib Volynskii",
            price: 39.99,
            description: "Khlib Volynskii",
            image: productImageC
        }
    ];

    const handleBuyClick = (product) => {
        setSelectedProduct(product);
        setShowOrderWindow(true);
    };

    const handleOrderSubmit = (details) => {
        setOrderDetails(details);
        setIsOrderSubmitted(true);
        setShowOrderWindow(false);
    };

    return (
        <div className="app">
            <h1 className="app-title">Welcome to Our Store</h1>
            {isOrderSubmitted ? (
                <OrderSummary
                    product={selectedProduct}
                    
                    first={orderDetails.first}
                    last={orderDetails.last}
                    father={orderDetails.father}

                    address={orderDetails.address}
                    cardNumber={orderDetails.cardNumber}
                />
            ) : showOrderWindow ? (
                <OrderWindow
                    product={selectedProduct}
                    onClose={() => setShowOrderWindow(false)}
                    onSubmit={handleOrderSubmit}
                />
            ) : (
                <ProductList products={products} onBuyClick={handleBuyClick} />
            )}
        </div>
    );
}

export default App;
