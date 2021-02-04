import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Dessert extends Component {
    state={
        dessert: [1,2]
    }
    render() {
        return (
            <div className="row">
            {
                this.state.dessert.map(item => (
                    <ProductCard/>
                ))
            }
            </div>
        );
    }
}

export default Dessert;
