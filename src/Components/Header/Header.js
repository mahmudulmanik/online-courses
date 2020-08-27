import React from 'react';
import './Header.css';
import logo from '../../images/udemy-logo.png';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="logo" />
            <nav>
                <a href="/udemy">Udemy Courses</a>
            </nav>
        </div>
    );
};

export default Header;