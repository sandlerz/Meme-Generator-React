import React from "react";
import memesData from "../memesData"

export default function Meme(){
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    allMemeImages: memesData
  })

  const handleClick = () =>{
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNum].url
    setMeme(prevMeme => ({
      ...prevMeme, 
      randomImage: url
    }))
  }

  return(
    <main className="meme">
      <div className="meme-text">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button onClick={handleClick} className="meme-button">Get a new meme image</button>
      </div>
      <div className="meme-img">
        <img src={meme.randomImage}/>   
      </div>
    </main>
  )
}