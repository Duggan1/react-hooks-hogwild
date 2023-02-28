import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({toggleGreased, toggleSort}) => {
	
	const handleSort = (e)=> toggleSort (e.target.value)

	return (
		<div className="navWrapper">
			<select onChange={handleSort}>
				<option></option>
				<option>name</option>
				<option>weight</option>
			</select>
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig" onClick={toggleGreased}>
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
