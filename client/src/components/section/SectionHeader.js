import React, { Component } from 'react';

class SectionHeader extends Component {
    render() {
        return (
                <div className="col-md-12">
                    <div className="section-header">
                        <p>{this.props.info}</p>
                        <h4>{this.props.title}</h4>
                    </div>
                </div>
        );
    }
}

export default SectionHeader;
