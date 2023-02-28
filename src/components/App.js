import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogPen from "./HogPen"



function App() {

	const [grease, setGrease]=useState(false)
	const toggleGreased = () => setGrease(g => !g)

	const [sort, setSort]=useState('')
	const toggleSort = (someString) => setSort(someString)

	const sortPigs = (hogA, hogB) => {
		switch ( sort ) {
			case 'name':
				if (hogA.name<hogB.name){
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

	const onlyGreased = hog => hog.greased
	const filteredHogs = grease ? hogs.filter(onlyGreased) : hogs

	const sortedHogs = [...filteredHogs].sort(sortPigs)

	return (
		<div className="App">
			<Nav toggleGreased={toggleGreased} toggleSort={toggleSort}/>
			<HogPen hogs={sortedHogs}/>
		</div>
	);
}

export default App;
