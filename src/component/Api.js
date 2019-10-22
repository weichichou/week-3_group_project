import React, { Component } from 'react'
import Summary from "./Summary"

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
                    return (<Summary
                    imagecontent={movie.image}
                    desc = {movie.desc}
                    title = {movie.title}
                    director = {movie.director}
                    stars= {movie.stars}
                    
                    />
                    )
                })}
                
            </div>
        )
    }
}

