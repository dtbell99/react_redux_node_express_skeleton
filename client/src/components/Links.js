import React, { Component } from 'react';

class Links extends Component {
    render() {
        return (
            <div className="Links">
                <a href="#comp1" onClick={() => this.props.navigate("comp1")}>Comp1</a>
                <a href="#comp2" onClick={() => this.props.navigate("comp2")}>Comp2</a>
            </div>
        );
    }
}

export default Links;
