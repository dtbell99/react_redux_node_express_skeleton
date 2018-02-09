import React, { Component } from 'react';

class Comp2 extends Component {
    render() {
        return (
            <div className="Comp2">
                <h3>Comp2</h3>
                <hr /><br />
                <a href="#setactivepost" onClick={() => this.props.setActivePost(0)}>View Post 1</a>
                <br /><br />
                <a href="#setactivepost" onClick={() => this.props.setActivePost(1)}>View Post 2</a>
            </div>
        );
    }
}

export default Comp2;
