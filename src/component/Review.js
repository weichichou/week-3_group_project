import React, { Component } from 'react';
import { directive } from '@babel/types';
import './Review.css';
import Api from './Api';

export default class Review extends Component {
  
    state = {
        numLikes: 0
    };

    increment = () => {
        this.setState({
            numLikes: this.state.numLikes + 1
        })
    };

    render (){
        return (
            <div>
                <p>This movie has <b>{ this.state.numLikes}</b> likes!  
                    <button onClick={this.increment}>Like</button></p>
               
                <p></p>
                <h4>Score: {this.props.score} </h4>
                
            </div>
        )
    }
}