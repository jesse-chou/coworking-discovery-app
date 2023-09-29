import React from "react";

const Header = () => {
  return (
    <header className='header' >
      <nav className='nav'>
        <a href="" className="logo">Offispot</a>
        <ul className="navLinks">
          <a href="">ABOUT</a>
          <a href="">LOGIN</a>
        </ul>
      </nav>
      <h1>Work From Anywhere</h1>
      <h2>Track places to work remotely in NYC</h2>
    </header>
  )
}

export default Header;