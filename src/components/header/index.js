import React from 'react';
import './styles.scss'

const Header = () => {
    return (
        <header className='header_wrap'>
            <div className='wrapper'>
                <div className='container'>
                    <div className='header_contain'>
                        <p className='header_icon'>
                            <img src="./img/IconicLogo.1014f282.png" alt='' />
                        </p>
                        <ul className='header_links'>
                            <li className='header_linkItem'>
                                <a href="#login"><span>Login</span></a>
                            </li>
                            <li className='header_linkItem'>
                                <a href=""><span>Get Started</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
