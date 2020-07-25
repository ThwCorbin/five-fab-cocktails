import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Tab from "./Tab.js";
import "./Tab.css";
import Content from "./Content";

let url = " https://www.thecocktaildb.com/api/json/v1/1/random.php";

// let cocktails = [];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cocktails: [],
			activeTabIdx: 0,
		};
	} //constructor

	getCocktails = () => {
		// * Fetch five random cocktails
		// * See https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/
		Promise.all([fetch(url), fetch(url), fetch(url), fetch(url), fetch(url)])
			.then((responses) => {
				return Promise.all(
					responses.map((res) => {
						return res.json();
					})
				);
			})
			.then((data) => {
				let objArr = [];
				data.forEach((obj) => {
					let cocktail = {
						name: obj.drinks[0].strDrink,
						instructions: obj.drinks[0].strInstructions,
						image: obj.drinks[0].strDrinkThumb,
						spirits: {
							spirit1: obj.drinks[0].strIngredient1,
							spirit2: obj.drinks[0].strIngredient2,
							spirit3: obj.drinks[0].strIngredient3,
							spirit4: obj.drinks[0].strIngredient4,
							spirit5: obj.drinks[0].strIngredient5,
							spirit6: obj.drinks[0].strIngredient6,
							spirit7: obj.drinks[0].strIngredient7,
							spirit8: obj.drinks[0].strIngredient8,
							spirit9: obj.drinks[0].strIngredient9,
							spirit10: obj.drinks[0].strIngredient10,
							spirit11: obj.drinks[0].strIngredient11,
							spirit12: obj.drinks[0].strIngredient12,
							spirit13: obj.drinks[0].strIngredient13,
							spirit14: obj.drinks[0].strIngredient14,
							spirit15: obj.drinks[0].strIngredient15,
						},
						measures: {
							measure1: obj.drinks[0].strMeasure1,
							measure2: obj.drinks[0].strMeasure2,
							measure3: obj.drinks[0].strMeasure3,
							measure4: obj.drinks[0].strMeasure4,
							measure5: obj.drinks[0].strMeasure5,
							measure6: obj.drinks[0].strMeasure6,
							measure7: obj.drinks[0].strMeasure7,
							measure8: obj.drinks[0].strMeasure8,
							measure9: obj.drinks[0].strMeasure9,
							measure10: obj.drinks[0].strMeasure10,
							measure11: obj.drinks[0].strMeasure11,
							measure12: obj.drinks[0].strMeasure12,
							measure13: obj.drinks[0].strMeasure13,
							measure14: obj.drinks[0].strMeasure14,
							measure15: obj.drinks[0].strMeasure15,
						},
					};
					objArr.push(cocktail);
				});

				this.setState({
					cocktails: objArr,
				}); //setState
			});
	}; //getCocktails

	updateCocktail = () => {
		// console.log(`The active cocktail idx ${this.state.activeTabIdx}`);
		const idx = this.state.activeTabIdx;
	};

	handleTabClick = (e) => {
		//* Get the clicked tab's parent's childNodes
		let childArray = Array.from(e.target.parentElement.childNodes);
		let clickedTabIdx;

		//* Get the index of the clicked tab
		childArray.forEach((child, idx) => {
			if (child.textContent === e.target.textContent)
				return (clickedTabIdx = idx);
		});

		//* Set the state with the index
		this.setState(
			{
				activeTabIdx: clickedTabIdx,
			},
			() => {
				this.updateCocktail();
			}
		);
		//* "The second parameter to setState() is an optional callback function
		//* that will be executed once setState is completed
		//* and the component is re-rendered."
		// https://reactjs.org/docs/react-component.html#setstate

		// console.log(`The index of the clicked tab is ${clickedTabIdx}`);
	};

	render() {
		let allTabs = this.state.cocktails.map((cocktail, idx) => {
			if (idx === this.state.activeTabIdx) {
				return (
					<Tab
						cocktailName={cocktail.name}
						tabCallback={this.handleTabClick}
						className="cocktail-name-li active"
						key={idx}
					/>
				);
			} else {
				return (
					<Tab
						cocktailName={cocktail.name}
						tabCallback={this.handleTabClick}
						className="cocktail-name-li"
						key={idx}
					/>
				);
			}
		});

		let allContents = this.state.cocktails.map((cocktail, idx) => {
			if (idx === this.state.activeTabIdx) {
				return <Content cocktail={cocktail} key={idx} />;
			}
		});

		return (
			<div className="App">
				<Header />
				<ul className="tabs">{allTabs}</ul>
				<div className="contents">{allContents}</div>
				{/* <Content cocktails={this.state.cocktails} /> */}
			</div>
		);
	} //render

	componentDidMount() {
		this.getCocktails();
	} //componentDidMount

	// componentDidUpdate(prevProps) {
	// // 	//* "setState() must be wrapped in a condition" to prevent an infinite loop
	// 	if(this.props[some property key] !== prevProps[some property key] ) {
	// 		this.updateCocktail();
	// 	}
	// } //componentWillMount
} //App

export default App;
