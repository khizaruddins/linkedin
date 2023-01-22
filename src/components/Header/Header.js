import React from 'react'
import './Header.scss';
function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin logo" />
            <div className="header__search">
                <img src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png" alt="search icon" />
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header__right"></div>
    </div>
  )
}

export default Header