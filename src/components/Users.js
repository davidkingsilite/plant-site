import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import './Users.css';

const Users = () => {
    const [ users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try{
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });

                const userName = response.data.map(user => user.username);
                // console.log(response.data);
                isMounted && setUsers(userName);
            } catch (err){
                console.error(err);
                // navigate('/login', { state: { from: location}, replace: true});
            }
        }
        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    },[])

    return (
        <article>
            <h2> Users List</h2>
            { users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li className='list-users' key={i}>{user}</li>)}
                    </ul>
                ) : <p> No Users to display</p>
            }
        </article>
    );
};

export default Users;
