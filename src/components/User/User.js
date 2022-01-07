import React, { useState, useEffect } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import './User.css'


const User = (props) => {
    const [users, setUsers] = useState([])
    const count = Math.round(Math.random() * 100);
    //${count}
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=1`)
        .then(res => res.json())
        .then(data => setUsers(data.results))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="user-container" onLoad={() => props.handleCountUser(users)}>
            {users.map(user => <SingleUser user={user}></SingleUser>)}
        </div>
    );
};

export default User;