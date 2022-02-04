import React from 'react';

import './css/Expanded.css'

function Expanded ({data}) {
    const expandedHeader = () => {
        return (
            <div className="expanded-header"> Productos </div>
        )
    }

    const productsElements = []
    for (const product of data.products) {
        console.log(product)
        productsElements.push(
            <div className="product-container">
                <div className="product-name"> { product.name } </div>
                <div className="product-quantity"> { product.quantity } </div>
                <div className="product-price"> $ { product.price } </div>
            </div>
        )
    }

    return [expandedHeader(), ...productsElements];
};

export default Expanded