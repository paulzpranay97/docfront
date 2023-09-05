import React from 'react';
import logol from "../Component/logol.png"
import './Navbar.css';

const Navbar = ({ onHamburgerClick,onLinkClick }) => {
  // console.log(onHamburgerClick)

  const handleLinkClick = (isDatabase) => {
    onLinkClick(isDatabase);
  };
  return (
    <div className='navbar'>
      <img src={logol} alt="err" />
      <div className='options'>
        <a href="#" onClick={() => handleLinkClick(false)}>User's Guide Doc</a>
        <a href="#" onClick={() => handleLinkClick(true)}>Database Doc</a>
      </div>
      <form className='search'>
            <input type="text" placeholder='Search here . . .'/>
            <button type="button">Search</button>
            </form>
      <div className="hamburger" onClick={onHamburgerClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default Navbar;
