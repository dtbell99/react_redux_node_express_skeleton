import React, { Component } from 'react';
import { connect } from 'react-redux'
import Comp1 from './Comp1.js'
import Comp2 from './Comp2.js'
import Links from './Links.js'
import { changeView } from '../redux/actions/ConfigActions'

class Navigator extends Component {

    navigate = (view) => {
        this.props.updateView(view)
    }

    render() {
        return (
            <div className="Navigator">
                <Links navigate={this.navigate} />
                {this.props.view === 'comp1' && <Comp1 />}
                {this.props.view === 'comp2' && <Comp2 />}
            </div>
        );
    }
}

const mapStateToProps = store => ({
    view: store.config.loadedView
})

const mapDispatchToProps = dispatch => ({
    updateView: (view) => dispatch(changeView(view))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
