import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationImage from '../images/notification.png';
import LogoutButton from './Buttons/LogoutButton';
import { AppBar } from '@mui/material';

const NavbarCompany = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'blue', zIndex: 1000 }}>
            <div>
                <nav className="bg-[#112d4e] p-4 relative"> {/* Make the parent relative for absolute positioning */}
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="logo">
                            <h1 className="text-white text-lg">Right Resource Fit</h1>
                        </div>
                        <div>
                            <ul className='flex gap-3 text-white'>
                                <li>
                                    <Link to="/PostJob">
                                        <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-1 rounded px-2.5'>Post Jobs</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/About">
                                        <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-1 rounded px-2.5'>About</button>
                                    </Link>
                                </li>
                                <li
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link to="/ComapnyAccount">
                                        <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-1 rounded px-2.5'>Account</button>
                                    </Link>
                                    {dropdownOpen && (
                                        <div className="absolute bg-white text-black mt-[1px] rounded shadow-lg z-50" // Increased z-index
                                             onMouseEnter={handleMouseEnter}
                                             onMouseLeave={handleMouseLeave}
                                        >
                                            <Link to="/Profile">
                                                <div className="py-2 px-4 hover:bg-[#3f72af] hover:text-white cursor-pointer">Profile</div>
                                            </Link>
                                            <hr />
                                            <Link to="/Dashboardcompany">
                                                <div className="py-2 px-4 hover:bg-[#3f72af] hover:text-white cursor-pointer">Dashboard</div>
                                            </Link>
                                            <hr style={{ border: '2px solid [#3f72af]' }} />
                                            <LogoutButton />
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link to="/Notification">
                                        <div className='inline-flex items-center justify-center text-center hover:bg-white hover:text-[#3f72af] rounded'>
                                            <img src={NotificationImage} alt="Notification Icon" className='h-7 w-7' />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </AppBar>
    );
}

export default NavbarCompany;
