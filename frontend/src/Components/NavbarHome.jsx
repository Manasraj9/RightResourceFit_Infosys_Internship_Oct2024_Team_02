import React from 'react'
import { Link } from 'react-router-dom'
import NotificationImage from '../images/notification.png'

const NavbarHome = () => {
    return (
        <nav className="bg-[#112d4e] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <h1 className="text-white text-lg">Right Resource Fit</h1>
                </div>
                <div>
                    <ul className='flex gap-3 text-white '>
                    <li>
                            <Link to="/Jobs">
                                <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-1 rounded px-2.5'>Jobs</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                <button className='bg-[#3f72af] nline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af]  py-1 rounded px-2.5'>About</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Account">
                                <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af]  py-1 rounded px-2.5'>Account</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Notification">
                            <div className='inline-flex items-center justify-center text-center hover:bg-white hover:text-[#3f72af] rounded '>
                                    <img src={NotificationImage} alt="Notification Icon" className='h-7 w-7' />
                            </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarHome
