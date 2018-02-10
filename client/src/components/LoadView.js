import Loader from 'react-loader-spinner'
import React, { Component } from 'react';
import { connect } from 'react-redux'

class LoadView extends Component {
    render() {
        return (
            <div className="loadView">
                {this.props.loading &&
                    <Loader
                        type="Oval"
                        color="cadetblue"
                        height="50"
                        width="50"
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = store => ({
    loading: store.config.loading
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadView)