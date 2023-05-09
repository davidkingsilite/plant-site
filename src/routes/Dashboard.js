import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import SidebarRight from '../components/SidebarRight';
import '../components/Dashboard.css';


const Dashboard = () => {
    return (
        <div className='dash-wrap'>
            <Sidebar />
            <Main />
            <SidebarRight />
        </div>
    )
}

export default Dashboard
