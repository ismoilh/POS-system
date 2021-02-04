import React, { Component } from 'react';

class ProductSlider extends Component {
    render() {
     
        return (
            <div className="products">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://unsplash.com/photos/4miBe6zg5r0/download?force=true&w=1920" class="d-block w-100 " alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1445217143695-467124038776?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=833&q=80" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1429704658776-3d38c9990511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
               
            </div>
        );
    }
}

export default ProductSlider;
