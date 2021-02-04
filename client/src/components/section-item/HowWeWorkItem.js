import React, { Component } from 'react';

class HowWeWorkItem extends Component {
    render() {
        return (
            <div className="col-md-4 mb-2">
                <div className="how-we-work-item">
                    <i className={"fas " + this.props.icon}></i>
                    <div className="step">{this.props.step}</div>
                    <h6 className="item-title">{this.props.title}</h6>
                    <p className="item-info">{this.props.info}</p>
                    {
                        this.props.arrowIcon ? <i className="far fa-chevron-right arrow"></i> : ""
                    }
                </div>
            </div>
        );
    }
}

export default HowWeWorkItem;
