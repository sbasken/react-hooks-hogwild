import React from "react";
import Nav from "./Nav";
import PigContainer from "./PigContainer";

import hogs from "../porkers_data";

function App() {
	
	return (
		<div className="App">
			<Nav />
			<PigContainer pigs={hogs} />
		</div>
	);
}

export default App;
