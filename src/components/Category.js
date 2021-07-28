import React from 'react'
import { Link } from 'react-router-dom'

function Category({ name, image }) {
    return (
        <div>
            <Link to={`/search/c/${name}`}>
                <div className="category">
                    <img src={image} alt={name}/>
                    <p>{name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Category
