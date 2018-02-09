import React, { Component } from 'react';
import Comp1 from './Comp1.js'
import Comp2 from './Comp2.js'
import Links from './Links.js'

class Navigator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            view: "comp2",
            posts: [
                {
                    id: 0,
                    name: "post 1",
                    detail: "post 1 detail"
                },
                {
                    id: 1,
                    name: "post 2",
                    detail: "post 2 detail"
                }
            ],
            activePost: {}
        }
    }

    navigate = (view) => {
        this.setState({ view })
    }

    setActivePost = (id) => {

        var activePost = {}
        this.state.posts.forEach(post => {
            if (post.id === id) {
                activePost = post
            }

            // set that post in state here...
            // change state view to comp1... 
        })
        this.setState({
            view: "comp1",
            activePost: activePost
        })
    }

    render() {
        return (
            <div className="Navigator">
                <Links navigate={this.navigate} />
                {this.state.view === 'comp1' && <Comp1 activePost={this.state.activePost} />}
                {this.state.view === 'comp2' && <Comp2 posts={this.state.posts} setActivePost={this.setActivePost} />}
            </div>
        );
    }
}

export default Navigator;