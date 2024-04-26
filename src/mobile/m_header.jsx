import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './m_header.css';
import bmt from './bmt.png';

function MobHeader() {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setIsActive(false);
    }, [location.pathname]);

    return (
        <div className='wrapper'>
          <header className={`header ${isActive ? 'active' : ''}`}>
            <div className='container'>
              <div className='header__body'>
                <Link to="/" className='header__logo'>
                  <img src={bmt} alt="Logo"/>
                </Link>
                <div className={`header__burger ${isActive ? 'active' : ''}`} onClick={handleClick}>
                    <span></span>
                </div>
                <nav className={`header__menu ${isActive ? 'active' : ''}`}>
                    <ul className="header__list">
                        <li>
                            <Link to="/" className={`header__link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`header__link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        </li>
                        <li>
                            <Link to="/how_it_works" className={`header__link ${location.pathname === '/how_it_works' ? 'active' : ''}`}>How it Works</Link>
                        </li>
                        <li>
                            <Link to="/team" className={`header__link ${location.pathname === '/team' ? 'active' : ''}`}>Team</Link>
                        </li>
                        <li>
                            <Link to="/links" className={`header__link ${location.pathname === '/links' ? 'active' : ''}`}>Links</Link>
                        </li>
                        <li>
                            <Link to="/contacts" className={`header__link ${location.pathname === '/contacts' ? 'active' : ''}`}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
    );
}

export default MobHeader;
