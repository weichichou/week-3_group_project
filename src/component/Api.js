import React, { Component } from 'react'
import Summary from "./Summary"
import Review from "./Review"

export default class api extends Component {
    state={
       movies:[]
    }
    componentDidMount() {
    fetch('https://my-json-server.typicode.com/LavanyaJay/movieapi/movies')
        .then(response => response.json()) // convert response to json
        
        .then((data )=> {
            console.log(data)
            this.setState({
                movies: data
            })  
                 // display data in the browser
        
        
    })
    }
    render() {
        return (
            <div>
                
                {this.state.movies.map(movie => {
                    return (
                    <div>                  
                    <Summary
                    imagecontent={movie.image}
                    desc = {movie.desc}
                    title = {movie.title}
                    director = {movie.director}
                    stars= {movie.stars}
                    
                    />
                    <Review score = {movie.userscore}/>
                    </div>
                    )
                    
                })}
                
            </div>
        )
    }
}

