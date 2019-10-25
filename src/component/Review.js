import React, { Component } from "react";

import "./Review.css";

import Comment from "./Comment";
import Upvote from "./Upvote";

export default class Review extends Component {
	state = {
		title: this.props.title
	};

	render() {
		return (
			<div>
				<Upvote
					title={this.props.title}
					incrementLike={this.props.incrementLike}
					likes={this.props.likes}
				/>
				<Comment movieid={this.props.movieid} />
			</div>
		);
	}
}
