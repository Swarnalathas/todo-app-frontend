import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <h1 className="title">
                {this.props.headerText}
            </h1>
        );
    }
}

export default Header;