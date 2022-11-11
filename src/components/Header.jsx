import React from "react"

export default function Header() {
    return (
        <div>
            <header className="navbar">
                <div className="title-logo"> 
                    <img src="/public/images/logo.png" alt="cat face logo" className="logo-image"/>
                    <h1>Meme Generator</h1>
                </div>
                    <h2 className="subtitle-nav">React course - Project 3</h2>
            </header>
    </div>
    )
    
}