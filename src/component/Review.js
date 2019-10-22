import React, { Component } from 'react';
import { directive } from '@babel/types';
import './Review.css';

export default class Review extends Component {
  
  state = {
      title: '',
      score: [],
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/LavanyaJay/movieapi/movies')
    .then(response => response.json())
    .then((data)=>{
        //console.log(data[0].title)
        this.setState({
             title: data[0].title
        })
        console.log(this.state.title)

        /* 
        console.log(data)
        this.setState({
            title: data
        }) */
    })
}


    render (){
        return (
            <div>
                {/* <p> { this.props.reviewTexts}</p>
                <h4>Score: { this.props.score }</h4> */}
                <h4>Title: { this.state.title }</h4>
            </div>
        )
    }
}