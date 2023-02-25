import React, { useState } from "react";
import Nav from "./Nav";
import PigContainer from "./PigContainer";

import hogs from "../porkers_data";

function App() {
	const [ greased, setGreased ] = useState(false)
	const [ selectedCategory, setSelectedCategory ] = useState("")

	function greaseButtonClicked() {
		setGreased((greased) => !greased)
	}

	function categorySelected(e) {
		setSelectedCategory(e.target.value)
	}
	console.log( selectedCategory )

	const sortByCategory = ( hogA, hogB ) => {
		switch( selectedCategory ) {
			case 'name':
				if ( hogA.name < hogB.name ) {
					return -1
				} else {
					return 1
				}
			case 'weight':
				return hogA.weight - hogB.weight
			default:
				return 0
		}
	}

	const filteredPigs = (greased) ? hogs.filter(hog => hog.greased === true) : hogs
	
	const sortedPigs = [ ...filteredPigs ].sort( sortByCategory )

	return (
		<div className="App">
			<Nav onGreaseButtonClicked={greaseButtonClicked} onCategorySelected={categorySelected}/>
			<PigContainer pigs={sortedPigs}/>
		</div>
	);
}

export default App;
