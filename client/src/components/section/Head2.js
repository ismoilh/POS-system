import React from 'react'
import '../../assets/css/style.css'

const Head2 = () => {
    return (
        <div className="header-content">
            <h1 className="title">Zeit, Essen zu bestellen</h1>
            <p className="header-text">Jetzt Restaurants in Deiner Umgebung finden</p>
            <div className="search-bar">
                <div className="input-group">
                    <i class="fal fa-map-marker-check"></i>
                    <input type="text" placeholder="Address" />
                </div>
                <div className="button-group">
                    <Link to={'/products'} className="btn btn-success mr-1 rounded-0">Servis yap</Link>
                    <Link to={'/products'} className="btn btn-success ml-1  rounded-0">Kendim alacağım</Link>
                </div>
            </div>
        </div>
    )
}

export default Head2
