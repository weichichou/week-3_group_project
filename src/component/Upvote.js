import React, { Component } from 'react'
import './Upvote.css';

export default class Upvote extends Component {
    state = {
        numDislikes: 0,
    }

    incrementLike = (likeOrDislike) => {

        if (likeOrDislike === 'numLikes'){
            this.props.incrementLike(this.props.title);
        } else {
            this.setState({
                [likeOrDislike]: this.state[likeOrDislike] + 1
            })
        }
    }
    
    
    render() {
        return (
            <div id='likes-div'>
              <i onClick={()=>{this.incrementLike('numLikes')}} class="far fa-thumbs-up"></i>
              <p>{ this.props.likes }</p>
              &nbsp;
              &nbsp;
              &nbsp;
              <i onClick={()=>{this.incrementLike('numDislikes')}} class="far fa-thumbs-down"></i>
              <p>{ this.state.numDislikes }</p>
           </div>
        )
    }
}
