import React from "react";
import { Link } from "react-router-dom";
import DetailPage from "./DetailPage";

export default props => {
	return (
		<div className="summaryClass">
			<h2>
				<div className="movieTitle ">{props.title}</div>
			</h2>

			<div className="newmoviePanel">
				<Link to={`/detailPage/${props.title}`}>
					<img
						className="newimageClass"
						src={props.imagecontent}
						alt=""
						style={props.specialstyle}
					/>
				</Link>
			</div>
		</div>
	);
};
