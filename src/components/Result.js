import React from 'react'
import { Link } from 'react-router-dom'

function Result({ id, name, image }) {
    return (
        <Link className="resultSample" to={`/details/${id}`}>
                    <img src={image} alt={name}/>
                    <div className="nameContainer">
                        <p>{name}</p>
                    </div>
            </Link>
    )
}

export default Result
