import React from "react";
import "./Header.css";
import Martini from "./Martini";
import Tumbler from "./Tumbler";

function Header() {
	return (
		<header>
			<h1 className="h1-title">Five Fab Cocktails</h1>
			<h2 className="h2-subtitle">
				Imbibe <Martini /> Enjoy <Tumbler /> Repeat
			</h2>
		</header>
	);
} //Header

export default Header;

// martini & tumbler svg: http://www.onlinewebfonts.com
