import React from 'react'
import { Link } from 'react-router-dom'

function Category({ name, image }) {
    return (
            <Link className="category" to={`/search/c/${name}`}>
                    <img src={image} alt={name}/>
                    <p>{name}</p>
            </Link>
    )
}

export default Category
