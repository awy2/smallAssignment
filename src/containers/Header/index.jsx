import React from 'react';
import './Header.css';
import logo from 'logo';

const Header = () => {
    return (
        <div className="Header">
            <img id="pdftron-logo" src={logo} alt="logo" />
            <a href="http://www.google.com">Product</a>
            <a href="http://www.google.com">Documentation</a>
            <a href="http://www.google.com">Company</a>
            <a href="http://www.google.com">Support</a>
            <a href="http://www.google.com">Blog</a>
        </div>
    );
};

export default Header;
