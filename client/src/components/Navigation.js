import React, { Component } from 'react';
import { connect } from 'react-redux'
import Homepage from './Homepage.js'
import ServerConfig from './ServerConfig.js'
import Links from './Links.js'
import { changeView } from '../redux/actions/ConfigActions'
import { updateServerConfig } from '../redux/actions/ConfigActions'
import LoadView from './LoadView'

class Navigator extends Component {

    navigate = (view) => {
        this.props.updateView(view)
    }

    render() {
        return (
            <div className="Navigator">
                {this.props.loading && <LoadView />}
                <Links navigate={this.navigate} />
                {this.props.view === 'Home' && <Homepage />}
                {this.props.view === 'ServerConfig' && <ServerConfig updateServerConfig={this.props.updateServerConfig} />}
            </div>
        );
    }
}

const mapStateToProps = store => ({
    view: store.config.loadedView,
    loading: store.config.loading
})

const mapDispatchToProps = dispatch => ({
    updateView: (view) => dispatch(changeView(view)),
    updateServerConfig: () => dispatch(updateServerConfig())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
