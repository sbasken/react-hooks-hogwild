import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ onGreaseButtonClicked, onCategorySelected }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span><br/>
			<label>Sort the Piggies by:  </label>
				<select onChange={onCategorySelected}>
					<option value=""></option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			<button onClick={onGreaseButtonClicked}>Show Greased!</button>
		</div>
	);
};

export default Nav;
