import React, {useState} from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-scroll'

const MobileSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        setIsOpen(!isOpen);
        e.preventDefault();
    }

    return (
        <div className="xl:hidden bg-bgdark text-white px-4 py-3 flex justify-between items-center">
            <p className='font-black z-[100]'>BrandName</p>
            <button onClick={handleClick} className='py-1 text-3xl z-[100]'>
                {isOpen ? <IoMdClose/> : <BiMenuAltRight/>} 
            </button>
                <nav className={`absolute left-0 right-0 z-10  ${isOpen ? 'top-[54px]' : 'top-[-500px]'} bg-bgdark linear duration-300 flex items-center justify-center py-5`}>
                            <ul>
                                <li>
                                    <Link onClick={handleClick} to="about" className='nav-item'>About</Link>
                                </li>
                                <li>
                                    <Link onClick={handleClick} to="testimonials" className='nav-item'>Testimonials</Link>
                                </li>
                                <li>
                                    <Link onClick={handleClick} to="projects" className='nav-item'>Projects</Link>
                                </li>
                                <li>
                                    <Link onClick={handleClick} to="pricing" className='nav-item'>Pricing</Link>
                                </li>
                                <li>
                                    <Link onClick={handleClick} to="contact" className='nav-item'>Contact</Link>
                                </li>
                            </ul>
                </nav>
        </div>
    )
}

export default MobileSidebar
