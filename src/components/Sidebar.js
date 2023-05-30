import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import logo from '../assets/images/logo.png';
import "./SidebarStyles.css";


const Sidebar = () => {

const navigate = useNavigate();
const logout = useLogout();

const handleLogout = async () => {
        await logout();
        navigate('/login');
    }

  return (
    <div className='container'>
      <aside>
        <div className='topdash'>
            <div className='logo'>
              <img src={logo} alt='logo'/>
              <h2 className='h-2'> Travel <span className='danger'>Experience</span></h2>
            </div>
            <div className='close' id='close-btn'>
                <span className="material-icons-sharp">close</span>
            </div>
        </div>

        <div className='sidebar'>
              < a href="#">
               <span className="material-icons-sharp"> grid_view </span>
               <h3 className='h-3'> Dashboard</h3>
              </a>
               < a href="#" className='active'>
               <span className="material-icons-sharp"> people </span>
               <h3 className='h-3'> Customers</h3>
              </a>
               < a href="#" >
               <span className="material-icons-sharp"> receipt long</span>
               <h3 className='h-3'>Orders</h3>
              </a>
               < a href="#" >
               <span className="material-icons-sharp"> insights </span>
               <h3 className='h-3'> Analytics</h3>
              </a>
               < a href="#" >
               <span className="material-icons-sharp"> mail outlin</span>
               <h3 className='h-3'>Messages</h3>
               <span className='message-count'>26</span>
              </a>
               < a href="#" >
               <span className="material-icons-sharp"> inventory </span>
               <h3 className='h-3'> Products</h3>
              </a>
               < a href="#" >
               <span className="material-icons-sharp"> leaderboard </span>
               <h3 className='h-3'> Reports</h3>
              </a>
               < a href=" " >
               <span className="material-icons-sharp"> settings </span>
               <h3 className='h-3'> Settings</h3>
              </a>
               < a href="#" >
               <span className="material-icons-sharp"> add </span>
               <h3 className='h-3'> Add Products</h3>
              </a>
               <a onClick={handleLogout} className='logout'>
               <span className="material-icons-sharp"> logout </span>
                Logout
               </a>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar

