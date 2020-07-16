import React, { Component } from "react";
import "./Content.css";
// import Ingredient from "./Ingredient";

class Content extends Component {
	// constructor(props) {
	// 	super(props);
	// } //constructor
	// let { name, instructions, image, spirits, measures } = this.props.cocktail;
	// let { key } = props.key;

	render() {
		let spiritsArr = [];
		let spiritsObj = this.props.cocktail.spirits;
		let measuresArr = [];
		let measuresObj = this.props.cocktail.measures;
		for (let property in spiritsObj) {
			spiritsArr.push(spiritsObj[property]);
		}
		for (let property in measuresObj) {
			measuresArr.push(measuresObj[property]);
		}

		let ingredients = measuresArr.map((measure, idx) => {
			return `${measure} ${spiritsArr[idx]}`;
		});

		console.log(ingredients);

		// ingredients.map((spirit, idx) => {
		// 	return (
		// 		<Ingredient
		// 			spirit={spirit}
		// 			measure={this.props.cocktail.measures[idx]}
		// 			key={idx}
		// 		/>
		// 	);
		// }); //ingredients

		return (
			<div className="content">
				{/* <div className="img+ingredients">
					<img src={this.props.cocktail.image} alt={this.props.cocktail.name} />
					<ul className="ingredients">{ingredients}</ul>
				</div> */}
			</div>
		);
	} //render
} //Content

export default Content;
