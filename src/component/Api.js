import React, { Component } from 'react'
import AppNavBar from '../component/AppNavBar';
import Summary from "./Summary"
import Review from "./Review"

export default class api extends Component {
    state={
       initialLoad:true,
       movies:[],
       likes: {},
       searchByGenreMovies:[],
    }

    incrementLike = title => {
        const updatedLikes = {...this.state.likes,
                                [title]: this.state.likes[title]+1}
        this.setState({likes: updatedLikes})
    }

    searchByGenre = genre => {
        console.log("to search on", genre);
        if (genre !== "All"){
            const searchList = this.state.movies
            .filter(movie => {
                return (movie.genre === genre)
            });

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
            const likes = data.reduce((acc, val) => {
                return {...acc,
                        [val.title]:0}
            },{})
            this.setState({
                movies: data,
                likes: likes
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
                    {this.state.movies
                        .map(movie => ({...movie, likes: this.state.likes[movie.title]}))
                        .sort((a,b)=>b.likes - a .likes)
                        .map(movie => {
                        return (
                        <div> 
                                         
                        <Summary
                        imagecontent={movie.image}
                        desc = {movie.desc}
                        title = {movie.title}
                        director = {movie.director}
                        stars= {movie.stars}
                        score = {movie.userscore}
                        />
                        <Review title={movie.title} incrementLike={this.incrementLike} likes={this.state.likes[movie.title]}/>
                        </div>
                        )
                        
                    })}
                    
                </div>
            )
        } else {

            return (
                <div>
                    <AppNavBar searchByGenre={this.searchByGenre} />
                    {this.state.searchByGenreMovies
                        .map(movie => ({...movie, likes: this.state.likes[movie.title]}))
                        .sort((a,b)=>b.likes - a .likes)
                        .map(movie => {
                        return (
                        <div> 
                                         
                        <Summary
                        imagecontent={movie.image}
                        desc = {movie.desc}
                        title = {movie.title}
                        director = {movie.director}
                        stars= {movie.stars}
                        score = {movie.userscore}
                        />
                        <Review title={movie.title} incrementLike={this.incrementLike} likes={this.state.likes[movie.title]}/>
                        </div>
                        )
                        
                    })}
                    
                </div>
            )

        }
        
    }
}

