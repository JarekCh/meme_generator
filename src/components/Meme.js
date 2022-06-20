import React, {useState} from 'react';
import memesData from '../memesData.js';


function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    
    const [allMemeImages, setAllMemeImages] = useState(memesData);    
    
    function getMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const reandomMemeImg = memesArray[randomNumber].url;        
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: reandomMemeImg,
            }
        })        
    }
    

    return (    
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>            
            {meme.randomImage && <img src={meme.randomImage} alt="meme image" className="meme--image" />}   
        </main>
    )
}

export default Meme