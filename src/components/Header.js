import React from 'react'
import trollFace from '../img/Troll_Face.png'

function Header() {
  return (
    <header className="header">
        <img 
            src={trollFace}
            className="header--image"
            alt='logo'
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React - Project</h4>
    </header>
  )
}

export default Header