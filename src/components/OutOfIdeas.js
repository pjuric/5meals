import React from 'react'
import Buttons from './Buttons'

function OutOfIdeas() {
    return (
        <div className="ideasContainer">
            <img src="group.png" alt="food group"/>
            <div className="descriptionSection">
                <h1>You’re out of <span>ideas</span> and don’t know what should you cook next?</h1>
                <p>
                    In that case try out our <b>“Feeling lucky?”</b> feature which will choose for you a 
                    random meal from our database. If you don't like what you get, you can try again, 
                    or you can repeat until you find the meal that you like. You can use this option 
                    whenever you are out of ideas or if you love surprises. Otherwise, use the 
                    search option for filtering dishes by name.
                </p>
                <Buttons blackText="Feelin' Lucky?" whiteText="Search" blackLink="/details" whiteLink="/search/sm/"/>
            </div>
        </div>
    )
}

export default OutOfIdeas
