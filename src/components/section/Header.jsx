import React from 'react'
import Logo from '../header/Logo.jsx';
import Menu from '../header/Menu.jsx';
import Sns from '../header/Sns.jsx';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <Logo/>
            <Menu/>
            <Sns/>
        </header>
    )
}

export default Header