import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Panini extends Component {
    state = {
        panini: [1]
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.panini.map(item => (
                        <ProductCard/>
                    ))
                }
            </div>
        );
    }
}

export default Panini;
