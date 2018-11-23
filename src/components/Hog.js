import React from 'react'
// import image from '../hog-imgs/cherub.png' - GETS ONE PIG (NOT DYNAMIC)
// Instead of this, see below in the Hog component where we use 'require' dynamically.

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

export default class Hog extends React.Component {

    state = {
        clicked: false
    }

    toggleHogCard = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        const { hog } = this.props
        const { toggleHogCard } = this
        const { clicked } = this.state

        const imgUrl = hog.name.toLowerCase().replace(/ /g,'_')
        const image = require(`../hog-imgs/${imgUrl}.jpg`)
    
        return (
        <li>
            <img onClick={toggleHogCard} src={image} />
            {
                clicked && // Note - && is truthy and is used instead of a ternary as we don't need an Else.
                // we can wrap the p tags in a div or wrap them in parens. Here I chose a div container.
                <div className='hog-toggle'>
                    <p>Name: {hog.name}</p>
                    <p>Speciality: {hog.specialty}</p>
                    <p>Weight: {hog[weight]}</p>
                </div>
            }
        </li>
        )
    }
}