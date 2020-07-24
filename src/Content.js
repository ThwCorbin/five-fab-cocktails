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
		});

		const ingredients = ingredientArr.map((ingredient, idx) => {
			if (!ingredient.includes("null ")) {
				return <Ingredient ingredient={ingredient} key={idx} />;
			}
		}); //ingredients

		return (
			<div className="content">
				<ul className="ingredients">{ingredients}</ul>
			</div>
		); //return
	} //render
} //Content

export default Content;

{
	/* <div className="img+ingredients">
					<img src={this.props.cocktail.image} alt={this.props.cocktail.name} />
					<ul className="ingredients">{ingredients}</ul>
				</div> */
}
