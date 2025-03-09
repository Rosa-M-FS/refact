import React from 'react';
import logo from '../assets/cocretainc.jpg';

const Header= ()=>{
    return (
        <header>
            <img src={logo} alt='logo Cocreta INC' className='logo'/>
        </header>
    );
}

export default Header;