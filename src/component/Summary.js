import React, { Component } from "react";
import { Link } from "react-router-dom";
import DetailPage from "./DetailPage";
export default class Summary extends Component {
	state = {};

	render() {
		return (
			<div className="summaryClass">
				<h2>
					<div className="movieTitle ">{this.props.title}</div>
				</h2>

				<div className="newmoviePanel">
					<Link to={`/detailPage/${this.props.title}`}>
						<img
							className="newimageClass"
							src={this.props.imagecontent}
							alt=""
							style={this.props.specialstyle}
						/>
					</Link>

					{/* <div className="contentPanel">
                            <div className="description">
                            <strong>Synopsis:</strong> {this.props.desc}
                            </div>
                            <div className="stars">
                            <strong>Stars: </strong>{this.props.stars}
                            </div>
                            <div className="director">
                            <strong>Director: </strong>{this.props.director}
                            </div>
                            <div className="score">
                            <strong>Score: </strong>{this.props.score}
                            </div>
                        </div> */}
				</div>
			</div>
		);
	}
}
