import React from 'react'
import Nav from './components/Nav'

function About() {
    return (
        <div className="aboutContainer">
            <Nav/>
            <div className="creditsContainer">
                <div className="creditsAndAbout">
                    <div className="about">
                        <h1>About</h1>
                        <p>
                            This web app is made in educational, practice and entertainment purposes and is not of marketing, commercial or business use.<br></br>
                            Some of main features of this web app include:
                        </p>
                        <ul>
                            <li>~ Random meal generator</li>
                            <li>~ Meals search by name </li>
                            <li>~ Meals search by ingredient name</li>
                            <li>~ Meal recipe details</li>
                            <li>~ Meals filtering by category, ingredients and areas</li>
                        </ul>
                    </div>
                    <div className="credits">
                        <h1>Credits</h1>
                        <ol>
                            <li>1. <a rel="noreferrer" target="_blank" href="https://www.themealdb.com/"><b>themealdb</b></a> API</li>
                            <li>2. <a rel="noreferrer" target="_blank" href="https://freellustrations.com/illustration/NDQp"><b>freellustrations</b></a> Theme Inspiration</li>
                            <li>3. <a rel="noreferrer" target="_blank" href="https://www.iconfinder.com/"><b>iconfinder</b></a> Icons</li>
                            <li>4. <a rel="noreferrer" target="_blank" href="https://www.manypixels.co/gallery"><b>manypixels</b></a> Illustrations</li>
                        </ol>
                    </div>
                </div>
                <img src="chef2.svg" alt=""/>
            </div>
        </div>
    )
}

export default About
