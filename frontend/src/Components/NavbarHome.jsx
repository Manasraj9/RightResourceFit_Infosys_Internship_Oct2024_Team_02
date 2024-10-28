// NavbarHome.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationImage from '../images/notification.png';
import LogoutButton from './Buttons/LogoutButton';

const NavbarHome = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = (e) => {
        const target = e.relatedTarget;
        const isInsideDropdown = target && target.closest('.dropdown-menu');
        const isInsideButton = target && target.closest('.account-button');

        if (!isInsideDropdown && !isInsideButton) {
            setDropdownOpen(false);
        }
    };

    return (
        <div>
            <nav className="bg-[#112d4e] p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="logo">
                        <h1 className="text-white text-lg">Right Resource Fit</h1>
                    </div>
                    <div>
                        <ul className='flex gap-3 text-white'>
                            <li>
                                <Link to="/PostJobs">
                                    <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-1 rounded px-2.5'>Jobs</button>
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
                                    <div className="absolute bg-white text-black mt-[1px] rounded shadow-lg z-1">
                                        <Link to="/Profile">
                                            <div className="py-2 px-4 hover:bg-[#3f72af] hover:text-white cursor-pointer">Profile</div>
                                        </Link>
                                        <hr />
                                        <Link to="/Dashboard">
                                            <div className="py-2 px-4 hover:bg-[#3f72af] hover:text-white cursor-pointer">Dashboard</div>
                                        </Link>
                                        <hr style={{ border: '2px solid [#3f72af]' }} />
                                        {/* Use the LogoutButton Component Here */}
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
    );
}

export default NavbarHome;
