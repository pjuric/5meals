import React from 'react'

function Nav() {
    return (
        <div className="navContainer">
            <img className="logo" src="/logo.svg" alt="logo"/>
            <div className="navLinks">
                <a href="/">Home</a>
                <a href="/explore">Explore</a>
                <a href="/search/sm">Search</a>
                <a href="/about">About</a>
            </div>
        </div>
    )
}

export default Nav
