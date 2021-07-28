import React from 'react'
import BlackButton from './BlackButton'
import WhiteButton from './WhiteButton'

function Buttons({blackText, whiteText, blackLink, whiteLink, i, blackHref, whiteHref}) {
    return (
        <div className="buttonsContainer">
            {(blackLink || blackHref) &&
                <BlackButton blackText={blackText} blackLink={blackLink} blackHref={blackHref} i={i}/>
            }
            {(whiteLink || whiteHref) &&
                <WhiteButton whiteText={whiteText} whiteLink={whiteLink} whiteHref={whiteHref} i={i}/>
            }
        </div>
    )
}

export default Buttons
