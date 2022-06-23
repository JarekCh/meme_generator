import { type } from '@testing-library/user-event/dist/type';
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

    function changeHandle(e) {
        const { name, value } = e.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        // submitToApi(formData)
        console.log(meme)
    }
    

    return (    
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name='topText'
                    onChange={changeHandle}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name='bottomText'
                    onChange={changeHandle}
                />
                <button 
                    className="form--button"
                    onClick={getMeme}
                >
                    Get a new meme image 🖼
                </button>
            </form>      
            <div className='meme'>    
                {meme.randomImage && <img src={meme.randomImage} alt="meme image" className="meme--image" />}  
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2> 
            </div>
        </main>
    )
}

export default Meme