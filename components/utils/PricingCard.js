import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {BsCheckCircleFill} from 'react-icons/bs'

const PricingCard = ({title, price, badge}) => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration='1500' data-aos-delay='300'  className='relative bg-white w-[70%] sm:w-[80%] mx-auto pt-[50px] pb-8 rounded-md cursor-default shadow-md xl:hover:translate-y-[-10px] xl:hover:shadow-2xl duration-300'>
            {/* BADGE 'NEW' */}
            {badge ? <div className='absolute left-[65%] top-[-5%] bg-orange-500 h-16 w-16 leading-[64px] rounded-full text-white font-black shadow-md rotate-6'>NEW</div> : null}
            {/* ------------ */}
            <p className='font-bold text-2xl pb-3'>{title}</p>
            <p className='text-sm pb-6'>Organize across all apps by hand</p>
            <p className='text-primary text-5xl font-black pb-2'>{price}$</p>
            <p className='text-primary pb-6'>PER MONTH</p>
            <button className='w-[80%] bg-primary text-white py-2 rounded-md mb-6'>Select Plan</button>
            <div className='w-[80%] mx-auto'>
                <p className='flex items-center py-2 text-sm'><BsCheckCircleFill className='text-2xl text-green-500 mr-3'/>Unlimited product updates</p>
                <p className='flex items-center py-2 text-sm'><BsCheckCircleFill className='text-2xl text-green-500 mr-3'/>Unlimited product updates</p>
                <p className='flex items-center py-2 text-sm'><BsCheckCircleFill className='text-2xl text-green-500 mr-3'/>Unlimited product updates</p>
                <p className='flex items-center py-2 text-sm'><BsCheckCircleFill className='text-2xl text-gray-300 mr-3'/>1GB Cloud storage</p>
                <p className='flex items-center py-2 text-sm'><BsCheckCircleFill className='text-2xl text-gray-300 mr-3'/>Email and community support</p>
            </div>
        </div>
    )
}

export default PricingCard
