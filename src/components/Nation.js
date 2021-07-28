import React from 'react'
import { Link } from 'react-router-dom'

function Nation({ name }) {
    return (
        <div>
            <Link to={`/search/a/${name}`}>
                <div className="nation">
                    <p className="regularParagraph">{name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Nation
