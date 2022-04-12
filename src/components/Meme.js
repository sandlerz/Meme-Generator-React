import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    allMemes: [],
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) =>
        setMeme((prevMeme) => ({
          ...prevMeme,
          allMemes: data.data.memes,
        }))
      );
  }, []);

  const handleClick = () => {
    const memesArray = meme.allMemes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className="meme">
      <div className="meme-text">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={handleClick} className="meme-button">
          Get a new meme image
        </button>
      </div>
      <div className="meme-img">
        <img src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
