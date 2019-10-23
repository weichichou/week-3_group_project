import React, { Component } from 'react';

import './Review.css';

import Comment from "./Comment"
import Upvote from "./Upvote"

export default class Review extends Component {
  
    

    render (){
        return (
            <div>
                <Upvote />
                <Comment />
                
            </div>
        )
    }
}