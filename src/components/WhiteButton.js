import React from 'react'
import { Link } from 'react-router-dom'

function WhiteButton({whiteText, whiteLink, whiteHref}) {
    return (
        <div>
            {whiteLink ?
                <Link to={whiteLink}>
                    <button className="whiteButton">{whiteText}</button>
                </Link>
            :
                <div className="whiteButton">
                    <a href={whiteHref} target="_blank" rel="noreferrer">{whiteText}</a>
                </div>
            }
            
        </div>
    )
}

export default WhiteButton
