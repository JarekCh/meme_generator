import React, {useState, useEffect } from 'react';



function Meme() {    
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    
    const [allMemes, setAllMemes] = useState([]);    

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            .catch(error => console.log(error))
    }, []);    
    
    // await alternative
    // ----------------------
    // useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])
    
    function getMeme() {        
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url    
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url,
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

    return (    
        <main>
            <div className="form">
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
            </div>      
            <div className='meme'>    
                {meme.randomImage && <img src={meme.randomImage} alt="meme image" className="meme--image" />}  
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2> 
            </div>
        </main>
    )
}

export default Meme