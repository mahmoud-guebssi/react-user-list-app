import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/UserList.css';

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {listOfUser.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;