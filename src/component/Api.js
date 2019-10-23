import React, { Component } from 'react'
import AppNavBar from '../component/AppNavBar';
import Summary from "./Summary"
import Review from "./Review"

export default class api extends Component {
    state={
       initialLoad:true,
       movies:[],
       searchByGenreMovies:[],
    
    }
    searchByGenre = genre => {
        console.log("to search on", genre);
        if (genre !== "All"){
            const searchList = this.state.movies
            .filter(movie => {
                return (movie.genre === genre)
            });
            console.log(searchList)
            this.setState({searchByGenreMovies:searchList,initialLoad:false})
        }else {
            this.setState({searchByGenreMovies:this.state.movies})
        }
        
        }
    componentDidMount() {
    fetch('https://my-json-server.typicode.com/LavanyaJay/movieapi/movies')
        .then(response => response.json()) // convert response to json
        
        .then((data )=> {
            console.log(data)
            this.setState({
                movies: data,
                
            })  
                 // display data in the browser
        
        
    })
    }
    render() {
        console.log(this.state)
        if (this.state.initialLoad){
            
            return (
                <div>
                    <AppNavBar searchByGenre={this.searchByGenre} />
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
        } else {

            return (
                <div>
                    <AppNavBar searchByGenre={this.searchByGenre} />
                    {this.state.searchByGenreMovies.map(movie => {
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
}

