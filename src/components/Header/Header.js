import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <h1>There have {props.users.length} users</h1>
        </div>
    );
};

export default Header;