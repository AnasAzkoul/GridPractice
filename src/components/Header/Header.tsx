import React from 'react'; 
import Button from '../Button/Button';
import logo from '../../assets/images/logo.png'; 
import bbc from '../../assets/images/logo-bbc.png'; 
import forbes from '../../assets/images/logo-forbes.png'; 
import bi from '../../assets/images/logo-bi.png'; 
import tech from '../../assets/images/logo-techcrunch.png'; 

import './Header.scss'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="company logo" className='header__logo' />
      <h3 className="heading-3">Your own home</h3>
      <h1 className="heading-1">
        The ultimate personal freedom
      </h1>
      <Button type='primary'>view your properties</Button>
      <p className="header__asSeenOn-text">As seen on</p>
      <div className="header__seenOn-logos">
        <img
          src={bbc}
          alt="companies' logos"
        />
        <img
          src={forbes}
          alt="companies' logos"
        />
        <img
          src={bi}
          alt="companies' logos"
        />
        <img
          src={tech}
          alt="companies' logos"
        />
      </div>
    </header>
  )
}

export default Header
