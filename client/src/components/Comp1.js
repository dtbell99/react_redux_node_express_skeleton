import React, { Component } from 'react';

class Comp1 extends Component {
    render() {
        return (
            <div className="Comp1">
                Comp1

               Name: {this.props.activePost.name}

            </div>
        );
    }
}

export default Comp1;
