import React from 'react'
import { Link } from 'react-router-dom'

function BlackButton({blackText, blackLink, blackHref, onClick}) {
    return (
        <div>
            {blackLink ? 
                <Link to={blackLink} onClick={onClick}>
                    <button className="blackButton">{blackText}</button>
                </Link>
            :
                <div className="blackButton">
                    <a href={blackHref} target="_blank" rel="noreferrer">{blackText}</a>
                </div>

            }
        </div>
    )
}

export default BlackButton
