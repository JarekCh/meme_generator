import React, {useState} from 'react';
import memesData from '../memesData.js';


function Meme() {
    const [memeImage, setMemeImage] = useState("");

    const getMeme = () => {
        const getRandomImg = Math.floor(Math.random() * memesData.data.memes.length);        
        const imgRandomUrl = memesData.data.memes[getRandomImg].url;
        setMemeImage(imgRandomUrl);     
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
            {memeImage && <img src={memeImage} alt="meme image" className="meme--image" />}   
        </main>
    )
}

export default Meme