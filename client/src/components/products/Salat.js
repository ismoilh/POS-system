import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Salat extends Component {
    state = {
        salat: [1, 2]
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.salat.map(item => (
                        <ProductCard />
                    ))
                }
            </div>
        );
    }
}

export default Salat;
