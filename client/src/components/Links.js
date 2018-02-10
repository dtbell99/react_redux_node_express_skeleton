import React, { Component } from 'react';

class Links extends Component {
    render() {
        return (
            <div className="Links">
                <a href="#home" onClick={() => this.props.navigate("Home")}>Home</a>
                &nbsp;|&nbsp;
                <a href="#config" onClick={() => this.props.navigate("ServerConfig")}>Server Config</a>
                <hr />
            </div>
        );
    }
}

export default Links;
