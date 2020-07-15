import React, { Component } from "react";
import "./App.css";

let url = " https://www.thecocktaildb.com/api/json/v1/1/random.php";

class App extends Component {
	constructor() {
		super();
		this.state = {
			cocktails: [],
		};
	}
	render() {
		return <div className="App"></div>;
	} //render

	getCocktails = () => {
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
				console.log(data);
				// let arr = this.state.jokes;
				// arr.push(data.joke);

				// this.setState({
				//   joke: data.joke,
				//   jokes: arr,
				// });
			});
	}; //getCocktail

	componentDidMount() {
		this.getCocktails();
	} //componentDidMount
} //App

export default App;
