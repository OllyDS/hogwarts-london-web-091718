import piggy from '../porco.png'
import React from 'react'

const Nav = ({ toggleFilter, changeSortBy }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br></br>
			<label>
				Greased Hogs Toggle: <input type='checkbox' onClick={toggleFilter} />
			</label>
			<label>
				<select onChange={event => changeSortBy(event.target.value)}>
					<option>Sort by...</option>
					<option value='name'>Name</option>
					<option value='weight'>Weight</option>
				</select>
			</label>
		</div>
	)
}

export default Nav
