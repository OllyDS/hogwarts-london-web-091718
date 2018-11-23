import React from 'react'
import Hog from './Hog'

// const HogList = ({ hogs }) =>
export default ({ hogs }) =>
    <ul>
        {
            hogs.map(hog => <Hog key={hog.name} hog={hog} />)
        }
    </ul>

// export default HogList