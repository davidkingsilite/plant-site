import React from 'react';
import './MainStyles.css';

const Main = () => {
    return (
            <div className='main-wrap'>
               <h1> Dashboard</h1>
                <div className='date'>
                    <input type='date' />
                </div>

                    <div className='insight'>
                        <div className='sales'>
                            <span className='material-icons-sharp'>analytics</span>
                            <div className='middle'>
                                <div className='left'>
                                    <h3> Total Sales</h3>
                                    <h1> $25,024</h1>
                                </div>
                                <div className='progress'>
                                    <svg>
                                        <circle cx='38' cy='38' r='36'></circle>
                                    </svg>
                                    <div className='number'>
                                        <p>81%</p>
                                    </div>
                                </div>
                            </div>
                            <small className='text-muted'> last 24 hours</small>
                        </div>

                        <div className='expenses'>
                            <span className='material-icons-sharp'>bar_chart</span>
                            <div className='middle'>
                                <div className='left'>
                                    <h3> Total Expenses</h3>
                                    <h1> $14,024</h1>
                                </div>
                                <div className='progress'>
                                    <svg>
                                        <circle cx='38' cy='38' r='36'></circle>
                                    </svg>
                                    <div className='number'>
                                        <p>66%</p>
                                    </div>
                                </div>
                            </div>
                            <small className='text-muted'> last 24 hours</small>
                        </div>

                        <div className='income'>
                            <span className='material-icons-sharp'>stacked_line_chart</span>
                            <div className='middle'>
                                <div className='left'>
                                    <h3> Total Income</h3>
                                    <h1> $10,024</h1>
                                </div>
                                <div className='progress'>
                                    <svg>
                                        <circle cx='38' cy='38' r='36'></circle>
                                    </svg>
                                    <div className='number'>
                                        <p>44%</p>
                                    </div>
                                </div>
                            </div>
                            <small className='text-muted'> last 24 hours</small>
                        </div>
                    </div>

                    <div className='recent-orders'>
                            <h2> Recent Order</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product Number</th>
                                        <th>Payments</th>
                                        <th>status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Foliage Drone</td>
                                        <td>567892</td>
                                        <td>Due</td>
                                        <td className='warning'>Pending</td>
                                        <td className='primary'> Details</td>
                                    </tr>
                                     <tr>
                                        <td>Foliage Drone</td>
                                        <td>567892</td>
                                        <td>Due</td>
                                        <td className='warning'>Pending</td>
                                        <td className='primary'> Details</td>
                                    </tr>
                                     <tr>
                                        <td>Foliage Drone</td>
                                        <td>567892</td>
                                        <td>Due</td>
                                        <td className='warning'>Pending</td>
                                        <td className='primary'> Details</td>
                                    </tr>
                                     <tr>
                                        <td>Foliage Drone</td>
                                        <td>567892</td>
                                        <td>Due</td>
                                        <td className='warning'>Pending</td>
                                        <td className='primary'> Details</td>
                                    </tr>
                                     <tr>
                                        <td>Foliage Drone</td>
                                        <td>567892</td>
                                        <td>Due</td>
                                        <td className='warning'>Pending</td>
                                        <td className='primary'> Details</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href='#' >Show All</a>
                    </div>
            </div>
            
    )
}

export default Main
