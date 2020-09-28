import React, { Component } from 'react';

class BaseLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="container">
                <div className="header">
                    <a href="#" className="app-title">Best Cockails</a>
                </div>
                {children}
            </div>


        );

    }
};

export default BaseLayout;