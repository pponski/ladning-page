import React from 'react'
import {BsWallet, BsBookmarks, BsPeople} from 'react-icons/bs'
import SectionHeading from '../utils/SectionHeading'


const About = () => {
    return (
        <section id='about'>
            <SectionHeading 
                title='About' 
                description='Problems trying to resolve the conflict between 
                he two major realms of Classical physics: Newtonian mechanics...'
            />
            <div className="container pt-[20px] md:pt-[60px] md:flex justify-between items-center">
                <div className='about-item'>
                    <BsWallet className='about-icon'/>
                    <p className='about-title'>Peace of Mind</p>
                    <p className='about-description'>So it really behaves like neither. Now we have given up.</p>
                </div>
                <div className='about-item'>
                    <BsBookmarks className='about-icon'/>
                    <p className='about-title'>Set For Life</p>
                    <p className='about-description'>They were used to create the machines that launched </p>
                </div>
                <div className='about-item'>
                    <BsPeople className='about-icon'/>
                    <p className='about-title'>100% Satisfaction</p>
                    <p className='about-description'>So it really behaves like neither. Now we have given up.</p>
                </div>
            </div>  
        </section>
    )
}

export default About