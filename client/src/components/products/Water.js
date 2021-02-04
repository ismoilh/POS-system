import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Water extends Component {
    state={
        water: [1,2,3,4,5,6,7,8]
    }
    render() {
        return (
            <div className="row">
            {
                this.state.water.map(item => (
                    <ProductCard/>
                ))
            }
            </div>
        );
    }
}

export default Water;
