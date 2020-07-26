import React from "react";
import "./Button.css";

function Button(props) {
	return (
		<button className="btn-five-more" onClick={props.btnCallback}>
			Five More
		</button>
	);
} //Button

export default Button;
