import React from "react";
import "./Ingredient.css";

function Ingredient(props) {
	return <li className="li-ingredient">{props.ingredient}</li>;
} //Ingredient

export default Ingredient;
