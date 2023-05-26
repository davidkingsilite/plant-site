import React from 'react'
import Users from '../components/Users';

const Admin = () => {
    return (
        <div>
            <h1>Admin Page</h1>
            <p> You must have been assigned an admin role</p>
            <br />
            <Users />
            <br />
        </div>
    )
}

export default Admin;
