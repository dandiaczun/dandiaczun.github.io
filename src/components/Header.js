import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Hi, I'm Dan</h1>
        <p>I'm a UX developer in Chicago</p>
    </header>
)

export default Header
