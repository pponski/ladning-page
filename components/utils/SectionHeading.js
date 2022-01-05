import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const SectionHeading = ({title, description}) => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="zoom-in" data-aos-duration='1000' data-aos-offset='100' className='text-white'>
            <p className='text-3xl font-bold pb-3 sm:text-4xl sm:pb-5'>{title}</p>
            <p className='text-xs px-8 font-light leading-5 sm:text-base sm:leading-7'>{description}</p>
        </div>
    )
}

export default SectionHeading
