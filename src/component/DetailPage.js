import React, { Component } from "react";
import { Link } from "react-router-dom";
import Review from './Review';
export default class DetailPage extends Component {
	state = {
		movie: {}
	};

	componentDidMount() {
		const title = this.props.match.params.title;
		fetch("https://my-json-server.typicode.com/LavanyaJay/movieapi/movies")
			.then(response => response.json()) // convert response to json

			.then(data => {
				console.log(data);
				const movieData = data.find(movie => {
					return movie.title === title;
				});
				this.setState({
					movie: movieData
				});
				// display data in the browser
			});
	}

	render() {
		return (
			<div className="summaryClass">
				<Link to="/">Go to HomePage</Link>
				<h2>
					<div className="movieTitle ">{this.state.movie.title}</div>
				</h2>

				<div className="moviePanel">
					<img
						className="imageClass"
						src={this.state.movie.image}
						alt=""
						style={this.props.specialstyle}
					/>

					<div className="contentPanel">
						<div className="description">
							<strong>Synopsis:</strong> {this.state.movie.desc}
						</div>
						<div className="stars">
							<strong>Stars: </strong>
							{this.state.movie.stars}
						</div>
						<div className="director">
							<strong>Director: </strong>
							{this.state.movie.director}
						</div>
						<div className="score">
							<strong>Score: </strong>
							{this.state.movie.userscore}
						</div>
					</div>
				</div>
				
			    
			</div>
		);
	}
}
