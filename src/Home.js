import React from 'react'
import Buttons from './components/Buttons'
import Nav from './components/Nav'

function Home() {
    return (
        <div className="homeContainer">
            <Nav/>
            <div className="homeContent">
                <div className="homeText">
                <h2>Welcome to <span>5-food</span>, a website of meal recipes from around the world.</h2>
                <p>
                    Search our site and create your own meals with help of our recipes! Create any type of meal with us today and be 
                    ready for every occasion, wheater it is breakfast, dinner, 
                    family lunch or fast-food meal.
                </p>
                <Buttons blackText="See More" whiteText="Feelin' lucky?" blackLink="/explore" whiteLink="/details"/>
                </div>
                <img src="./chef1.svg" alt="chef"/>
            </div>
        </div>
    )
}

export default Home
