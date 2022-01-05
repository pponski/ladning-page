import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll'

const DesktopSidebar = () => {

    useEffect(() => {
        Aos.init()
    }, []);

    return (
        <div data-aos="fade-down" data-aos-duration='1000' data-aos-delay='700' className="hidden xl:block absolute left-0 right-0 z-10">
            <div className="container text-white flex justify-between items-center">
                <p className='font-black z-[100] text-2xl'>BrandName</p>
                <nav className='h-[full]'>
                    <ul className='flex'>
                        <li>
                            <Link spy={true} smooth={true} duration={500} to="about" className='desktop-item'>About</Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} duration={800} to="testimonials" className='desktop-item'>Testimonials</Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} duration={900} to="projects" className='desktop-item'>Projects</Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} duration={1000} to="pricing" className='desktop-item'>Pricing</Link>
                        </li>
                        <li>
                            <Link spy={true} smooth={true} duration={1100} to="contact" className='desktop-item'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <button className='bg-primary border-primary border-2 px-6 py-2 text-sm font-light rounded-md hover:bg-transparent hover:text-primary duration-300'>Become a member</button>
            </div>
        </div>
    )
}

export default DesktopSidebar
