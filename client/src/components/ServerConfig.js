import React, { Component } from 'react';

class ServiceConfig extends Component {

    componentDidMount() {
        this.props.updateServerConfig()
    }

    render() {
        return (
            <div className="ServerConfig">
                <h3>Server Configuration</h3>

            </div>
        );
    }
}

export default ServiceConfig;
