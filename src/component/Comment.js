import React, { Component } from "react";

export default class Comment extends Component {
	state = {
		username: "",
		usercomment: "",
		totalComments: []
	};

	componentDidMount() {
		this._isMounted = true;
		console.log("mounting");
		const movie_Id = this.props.movieid;
		console.log(`movieId: ${movie_Id}`);
		fetch("http://localhost:4000/comments")
			.then(response => response.json())
			.then(data => {
				const commentsData = data.filter(comment => {
					return comment.movieid === movie_Id;
				});
				this.setState({
					totalComments: commentsData
				});
			});
	}

	componentWillUnmount() {
		this._isMounted = false;
		document.removeEventListener("onChange", this.handleNameChange);
		document.removeEventListener("onChange", this.handleCommentChange);
	}

	handleSubmit = event => {
		event.preventDefault();

		const movieId = this.props.movieid;
		const newComment = {
			movieid: movieId,
			username: this.state.username,
			usercomment: this.state.usercomment
		};

		fetch("http://localhost:4000/comments", {
			method: "POST",
			body: JSON.stringify(newComment),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(comment => {
				const comments = [...this.state.totalComments, comment];
				this.setState({ totalComments: comments });
			});
		this.setState({
			username: "",
			usercomment: ""
		});
	};

	handleNameChange = event => {
		this.setState({ username: event.target.value });
	};

	handleCommentChange = event => {
		this.setState({ usercomment: event.target.value });
	};

	render() {
		return (
			<div className="totalCommentsClass">
				<form
					className="commentClass"
					onSubmit={event => this.handleSubmit(event)}
				>
					<label>
						Name:
						<input
							className="nameClass"
							type="text"
							onChange={this.handleNameChange}
							value={this.state.username}
						/>
					</label>
					<label>
						Comment:
						<input
							className="userCommentClass"
							type="text"
							onChange={this.handleCommentChange}
							value={this.state.usercomment}
						/>
					</label>
					<input type="submit" className="commentBtn" value="Add Comment" />
				</form>

				<div className="allComments">
					{this.state.totalComments.map(comment => {
						return (
							<div className="displayComment">
								<span>
									<em>Name:</em>
									{comment.username}
									<em>Comment:</em> {comment.usercomment}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
