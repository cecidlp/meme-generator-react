import React, {useState} from "react";
import memesData from "../../memesData";

export default function Meme(){
    const [memeImage, setMemeImage] = useState()

    function getMemeImage() {
        const memeArray = memesData.data.memes
        const randomMeme = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomMeme].url)
    }


    return(
        <div className="form">
        <div className="inputs-div">
            <input type="text" value="" className="form-input" placeholder="Write the top line"></input>
            <input type="text" value="" className="form-input" placeholder="Write the bottom line"></input>
        </div>
            <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            <img src={memeImage} className="meme-image"/>
        </div>
    )
}