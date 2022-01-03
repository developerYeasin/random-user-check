import React, { useState, useEffect } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import './User.css'


const User = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=8')
        .then(res => res.json())
        .then(data => setUsers(data.results))
    }, [])
    return (
        <div className="user-container" onLoad={() => props.handleCountUser(users)}>
            {users.map(user => <SingleUser user={user}></SingleUser>)}
        </div>
    );
};

export default User;