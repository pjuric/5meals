import React from 'react'
import { Link } from 'react-router-dom'

function SpecialButton({ text, down, onClick, specialLink }) {
    return (
        <div>
            {onClick ?
                <div className="specialButton" onClick={onClick}>
                    <div className="text">{text}</div>
                    <div className="image">
                        {down ?
                            <img src="arrowDown.svg" alt=""/>
                        :
                            <img src="arrow.svg" alt=""/>
                        }
                    </div>
                </div>
            :
                <Link to={specialLink}>
                    <div className="specialButton">
                        <div className="text">{text}</div>
                        <div className="image">
                            {down ?
                                <img src="arrowDown.svg" alt=""/>
                            :
                                <img src="arrow.svg" alt=""/>
                            }
                        </div>
                    </div>
                </Link>
            }
        </div>
    )
}

export default SpecialButton
