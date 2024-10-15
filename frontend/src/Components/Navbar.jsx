import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#112d4e] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <h1 className="text-white text-lg">Right Resource Fit</h1>
                </div>
                <div>
                    <ul className='flex gap-3 text-white '>
                    <li>
                            <Link to="/Home">
                                <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-1 rounded px-2.5'>Home</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                <button className='bg-[#3f72af] nline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af]  py-1 rounded px-2.5'>About</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Login">
                                <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af]  py-1 rounded px-2.5'>Login</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Signup">
                                <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af]  py-1 rounded px-2.5'>Signup</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
