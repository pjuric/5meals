import React from 'react'
import { Link } from 'react-router-dom'

function Ingredient({ name, image, measure }) {
    return (
            <Link className="ingredientBox" to={`/search/si/${name}`}>
                    <img src={image} alt={name}/>
                    <p className="ingredientName">{name}</p>
                    <p className="measure">{measure}</p>
            </Link>
    )
}

export default Ingredient
