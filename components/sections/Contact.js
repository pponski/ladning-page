import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
// components
import SectionHeading from '../utils/SectionHeading'

const Contact = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id='contact' style={{backgroundImage:  `url('/contactbg.jpg')`}} className='bg-cover bg-center'>
            <div className="container xl:flex items-center">
                <div data-aos="fade-bottom" data-aos-duration="1000" className='xl:self-start xl:mt-4 xl:text-left'>
                    <p className="font-base text-lg py-2 xl:text-3xl">Contact Us</p>
                    <p className='font-bold text-2xl xl:text-5xl'>Make an Appointment</p>
                </div>
                <form data-aos="fade-top" data-aos-duration="1000" data-aos-delay='500' className='w-[80%] max-w-[400px] mx-auto mt-8 flex flex-col text-textgray'>
                    <input type="text" placeholder='Full Name' className='contact-label' />
                    <input type="text" placeholder='example@gmail.com' className='contact-label' />
                    <textarea name="message" placeholder="Type a message..." className="h-[150px] contact-label"></textarea>
                    <button className="bg-primary text-white font-sans px-8 py-2 rounded-md text-sm w-[80%] max-w-[250px] mx-auto">Book Appointment</button>
                </form>
            </div>
        </section>
    )
}

export default Contact  