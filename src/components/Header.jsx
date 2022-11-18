import React from "react"
import logo from "/public/images/logo.png"

export default function Header() {
    return (
        <div>
            <header className="header">
                <div className="title-logo"> 
                    <img src={logo} alt="cat face logo" className="header-image"/>
                    <h1>Meme Generator</h1>
                </div>
                    <h2 className="header-subtitle">React course - Project 3</h2>
            </header>
    </div>
    )
    
}