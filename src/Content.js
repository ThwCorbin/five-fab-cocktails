import React, { Component } from "react";
import "./Content.css";
import Ingredient from "./Ingredient";

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ingredients: {},
		}; //this.state
	} //constructor

	render() {
		const {
			name,
			instructions,
			image,
			spirits,
			measures,
		} = this.props.cocktail;
		let spiritsArr = [];
		let spiritsObj = spirits;
		let measuresArr = [];
		let measuresObj = measures;

		for (let property in spiritsObj) {
			spiritsArr.push(spiritsObj[property]);
		}
		for (let property in measuresObj) {
			measuresArr.push(measuresObj[property]);
		}

		//* Make Array list of ingredient Strings: "2 oz gin"
		let ingredientArr = measuresArr.map((measure, idx) => {
			return `${measure} ${spiritsArr[idx]}`;
		}); //ingredientArr

		const ingredients = ingredientArr.map((ingredient, idx) => {
			if (!ingredient.includes("null ") || !ingredient.includes("")) {
				return <Ingredient ingredient={ingredient} key={idx} />;
			}
		}); //ingredients

		return (
			<div className="div-cocktail">
				<div className="div-image-name-ingredients">
					<div className="div-img">
						<img src={image} alt={name} />
					</div>
					<div className="div-name-ingredients">
						<h3 className="h3-name">{name}</h3>
						<ul className="ul-ingredients">{ingredients}</ul>
					</div>
				</div>
				<div className="div-instructions">
					<p className="p-instructions">{instructions}</p>
				</div>
			</div>
		); //return
	} //render
} //Content

export default Content;
