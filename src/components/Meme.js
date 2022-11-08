import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  });

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: allMemeImages[randomNumber].url,
    }));
  }

  function addText(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top Text"
          onChange={addText}
          name="topText"
        />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom Text"
          onChange={addText}
          name="bottomText"
          value={meme.bottomText}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="form--image-container">
        <img src={meme.randomImage} alt="meme" className="form--image" />
        <h2 className="form--image-text top">{meme.topText}</h2>
        <h2 className="form--image-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
