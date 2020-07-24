import React from "react";
import "./Tab.css";

function Tab(props) {
	return (
		<li className={props.className} onClick={props.tabCallback}>
			{props.cocktailName}
		</li>
	);
} //Tab

export default Tab;
