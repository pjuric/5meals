import React from 'react'
import { Link } from 'react-router-dom'

function Nation({ name }) {
    return (
            <Link className="nation" to={`/search/a/${name}`}>
                    <p className="regularParagraph">{name}</p>
            </Link>
    )
}

export default Nation
