import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import { Nav } from "react-bootstrap";

export default class AppNavBar extends Component {
	state = {
		movieGenre: "all"
	};

	handleClick = genre => {
		this.setState({
			movieGenre: genre
		});
	};

	render() {
		/* if (this.state.movieGenre === "Animation"){
         
     
     }else if (this.state.movieGenre === "Sci-Fi"){
        
     } */
		return (
			<Nav
				activeKey="/home"
				onSelect={selectedKey => alert(`selected ${selectedKey}`)}
			>
				<Nav.Item>
					<Nav.Link onClick={() => this.props.searchByGenre("All")}>
						All
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={() => this.props.searchByGenre("Animation")}>
						Animation
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={() => this.props.searchByGenre("Sci-Fi")}>
						Sci-Fi
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={() => this.props.searchByGenre("Romance")}>
						Romance
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={() => this.props.searchByGenre("Drama")}>
						Drama
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={() => this.props.searchByGenre("Horror")}>
						Horror
					</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	}
}
