import React, { Component } from 'react';

class WhyWeItem extends Component {
    render() {
        return (
            <div className="col-md-4 mb-5">
                <div className="why-we-item">
                    <span className="icon"><i className={"fa " + this.props.icon} aria-hidden="true"></i></span>
                    <h5 className="title">{this.props.title}</h5>
                    <ul>
                        {
                            this.props.step.map((step, index) => (
                                <li key={index}>
                                    <i className="fa fa-check" aria-hidden="true"></i>
                                    {step}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default WhyWeItem;
