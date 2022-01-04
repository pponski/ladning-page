import React from 'react'
import { Link } from 'react-scroll'

const DesktopSidebar = () => {
    return (
        <div className="hidden xl:block absolute left-0 right-0 z-10">
            <div className="container text-white flex justify-between items-center">
                <p className='font-black z-[100] text-2xl'>BrandName</p>
                <nav className='h-[full]'>
                    <ul className='flex'>
                        <li>
                            <Link to="about" className='desktop-item'>About</Link>
                        </li>
                        <li>
                            <Link to="testimonials" className='desktop-item'>Testimonials</Link>
                        </li>
                        <li>
                            <Link to="projects" className='desktop-item'>Projects</Link>
                        </li>
                        <li>
                            <Link to="pricing" className='desktop-item'>Pricing</Link>
                        </li>
                        <li>
                            <Link to="contact" className='desktop-item'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <button className='bg-primary border-primary border-2 px-6 py-2 text-sm font-light rounded-md hover:bg-transparent hover:text-primary duration-300'>Become a member</button>
            </div>
        </div>
    )
}

export default DesktopSidebar
