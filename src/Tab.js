import React from "react";
import "./Tab.css";

function Tab(props) {
	console.log(props);
	return <li className="name">{props.cocktail.name}</li>;
} //Tab

export default Tab;
