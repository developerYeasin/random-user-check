import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <h1>There have {props.users.length} users</h1>
            <Link to="/home">Home</Link>
            <Link to="/country">country</Link>
        </div>
    );
};

export default Header;