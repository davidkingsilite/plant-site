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
                    <span className="material-icons-sharp active">light_mode</span>
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
                {/* End of recent updates */}
            <div className='sales-analytics'>
                <h2> Sales Analytics</h2>
                <div className='item online'>
                    <div className='icon'>
                         <span className="material-icons-sharp">shopping_cart</span>
                    </div>
                    <div className='right-sale'>
                        <div className='info'>
                            <h3>ONLINE ORDERS</h3>
                            <small className='text-muted'> Last 24 hours </small>
                        </div>
                        <h5 className='success'> +39%</h5>
                        <h3>3849</h3>
                    </div>
                </div>
                  <div className='item offline'>
                    <div className='icon'>
                         <span className="material-icons-sharp">shopping_bag</span>
                    </div>
                    <div className='right-sale'>
                        <div className='info'>
                            <h3>OFFLINE ORDERS</h3>
                            <small className='text-muted'> Last 24 hours </small>
                        </div>
                        <h5 className='danger'> -17%</h5>
                        <h3>1100</h3>
                    </div>
                </div>
                  <div className='item customers'>
                    <div className='icon'>
                         <span className="material-icons-sharp">person</span>
                    </div>
                    <div className='right-sale'> 
                        <div className='info'>
                            <h3>NEW CUSTOMERS</h3>
                            <small className='text-muted'> Last 24 hours </small>
                        </div>
                        <h5 className='success'> +25%</h5>
                        <h3>849</h3>
                    </div>
                </div>
                <div className='item add-product'>
                    <div>
                     <span className="material-icons-sharp">add</span>
                     <h3> Add product</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarRight;
