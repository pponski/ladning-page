import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
// components
import ClientCard from '../utils/ClientCard'
import SectionHeading from '../utils/SectionHeading'


const Testimonials = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id='testimonials' className='bg-bglight'>
            <SectionHeading 
                title='Testimonials' 
                description='Problems trying to resolve the conflict between 
                he two major realms of Classical physics: Newtonian mechanics...'
            />
            <div data-aos="zoom-in" data-aos-duration='1500' data-aos-delay='700' className='w-[85%] shadow-sm mx-auto md:flex md:my-6'>
                <ClientCard
                    image={'/man.jpg'}
                    job='Developer'
                    name='John Doe'
                    opinion='This proved to be impossible using the traditional 
                    concepts of space and time. Einstein developed a 
                    new view of time first and then space. This proved 
                    to be impossible using the traditional concepts of 
                    space and time. Einstein developed a new view 
                    of time first and then space.'
                />
                <ClientCard
                    image={'/woman.jpg'}
                    job='Designer'
                    name='Lia Brown'
                    opinion='This proved to be impossible using the traditional 
                    concepts of space and time. Einstein developed a 
                    new view of time first and then space. This proved 
                    to be impossible using the traditional concepts of 
                    space and time. Einstein developed a new view 
                    of time first and then space.'
                />
            </div>
        </section>
    )
}

export default Testimonials
