import React from 'react'
import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <footer className='py-12 px-4 xl:px-0 text-white'>
            <div className="container grid grid-cols-2 gap-y-10 xl:grid-cols-4">
                <div className='flex flex-col'>
                    <p className="footer-heading">Company Info</p>
                    <Link spy={true} smooth={true} duration={500} to="about" className='footer-item'>About</Link>
                    <Link spy={true} smooth={true} duration={500} to="testimonial" className='footer-item'>Testimonial</Link>
                    <Link spy={true} smooth={true} duration={500} to="projects" className='footer-item'>Projects</Link>
                    <Link spy={true} smooth={true} duration={500} to="pricing" className='footer-item'>Pricing</Link>
                    <Link spy={true} smooth={true} duration={500} to="contact" className='footer-item'>Contact</Link>
                </div>
                <div className='flex flex-col'>
                    <p className="footer-heading">Legal</p>
                    <a href="" className="footer-item">Business Marketing</a>
                    <a href="" className="footer-item">User Analytic</a>
                    <a href="" className="footer-item">Live Chat</a>
                    <a href="" className="footer-item">Unlimited Support</a>
                </div>
                <div className='flex flex-col'>
                    <p className="footer-heading">Features</p>
                    <a href="" className="footer-item">iOS and Android</a>
                    <a href="" className="footer-item">Watch a Demo</a>
                    <a href="" className="footer-item">Customers</a>
                    <a href="" className="footer-item">API</a>
                </div>
                <div className='flex flex-col'>
                    <p className="footer-heading">Get In Touch</p>
                    <a href="" className="footer-item">(480) 555-0103</a>
                    <a href="" className="footer-item">4517 Washington Ave.</a>
                    <a href="" className="footer-item">dobra.holt@example.com</a>
                    <a href="" className="footer-item">API</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
