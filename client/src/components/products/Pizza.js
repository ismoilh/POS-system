import React from 'react'
import '../root/style.css'

const Pizza = (props) => {
    return (
        <div className="box1">
            <div className="title-description">
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
                <h3>{props.price}</h3>
                <button className='addBtn'>Add to orders</button>
            </div>
            <img className='image' src={props.image} alt="" />
        </div>
    )
}

export default Pizza
