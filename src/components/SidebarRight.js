import React from 'react';
import './SidebarRightStyles.css';
import profilepic1 from '../assets/images/profile-1.jpg';
import profilepic2 from '../assets/images/profile-2.jpg';
import profilepic3 from '../assets/images/profile-3.jpg';
import profilepic4 from '../assets/images/profile-4.jpg';


const SidebarRight = () => {
    return (
        <div className='right'>
            <div className='top-right'>
                <button id='menu-btn'>
                       <span className="material-icons-sharp">menu</span> 
                </button>
                <div className='theme-toggler'>
                    <span className="material-icons-sharp">light_mode</span>
                    <span className="material-icons-sharp">dark_mode</span>
                </div>
                <div className='profile'>
                    <div className='info'>
                        <p>Hey, <b>Daniel</b></p>
                        <small className='text-muted'>Admin</small>
                    </div>
                    <div className='profile-photo'>
                        <img  src={profilepic1} />
                    </div>
                </div>
            </div>

            {/* End Top Right */}
            <div className='recent-updates'>
                <h2> Recent Updates</h2>
                <div className='updates'>
                    <div className='update'>
                        <div className='profile-photo'>
                            <img src={profilepic2}/>
                        </div>
                        <div className='message'>
                            <p><b>Mike Tyson</b> received his order of Night Lion tech drones</p>
                            <small className='text-muted'> 2 Minutes Ago</small>
                        </div>
                    </div>
                     <div className='update'>
                        <div className='profile-photo'>
                            <img src={profilepic3}/>
                        </div>
                        <div className='message'>
                            <p><b>Mike Tyson</b> received his order of Night Lion tech drones</p>
                            <small className='text-muted'> 2 Minutes Ago</small>
                        </div>
                    </div>
                     <div className='update'>
                        <div className='profile-photo'>
                            <img src={profilepic4}/>
                        </div>
                        <div className='message'>
                            <p><b>Mike Tyson</b> received his order of Night Lion tech drones</p>
                            <small className='text-muted'> 2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarRight;
