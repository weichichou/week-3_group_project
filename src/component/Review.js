import React, { Component } from 'react';
import { directive } from '@babel/types';
import './Review.css';

export default class Review extends Component {
    render (){
        return (
            <div>
                <p> { this.props.reviewTexts}</p>
                <h4>Score: { this.props.score }</h4>
            </div>
        )
    }
}