import React from "react";
import "./Ingredient.css";

function Ingredient(props) {
	return <li className="ingredient">{props.ingredient}</li>;
} //Ingredient

export default Ingredient;
