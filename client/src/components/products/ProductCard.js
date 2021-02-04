import React, { Component } from 'react';

class ProductCard extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-3">
                <div className="product-card">
                    <img src="https://i.ibb.co/C7m5VHz/3.png" alt="3" className="product-img" />
                    <div className="product-card-body">
                        <div className="product-card-body-left">
                            <p className="product-name">Pizza Spinat</p>
                            <p className="product-old-price">6.50 €</p>
                        </div>
                        <div className="product-card-body-right">
                            <p className="product-new-price">5.85 €</p>
                        </div>
                    </div>
                    <div className="product-card-footer">
                        <select class="form-select w-100 mb-1">
                            <option selected>Normal(30sm)</option>
                            <option value="1">Gros(40sm)</option>
                            <option value="2">Famillie(50)</option>
                            <option value="3">Party(60)</option>
                        </select>
                        <select class="form-select w-100 mb-1">
                            <option selected>wählen ein extra beilage</option>
                            <option value="1">Käserand</option>
                        </select>
                        <button className="btn btn-blue btn-block">EXTRA ZUTATEN & IN DEN WARENKORB</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;
