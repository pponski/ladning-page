import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({imageURL,delay}) => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay={delay}>
            <div style={{backgroundImage: `url(/${imageURL})`}} className='h-[350px] rounded-md project-bg flex items-end text-left text-white xl:hover:shadow-xl xl:hover:even:translate-y-[-20px] xl:hover:odd:translate-y-[20px] xl:hover:odd:rotate-2 xl:hover:even:rotate-[-2deg] duration-500 cursor-default'>
                <div className='pl-4 pb-8'>
                    <p className='font-bold text-md lg:text-base pb-2'>Tax Maganement</p>
                    <p className='text-sm sm:text-md font-light pb-6'>Life Tips From Top Ten Adventure Travelers</p>
                    <button className='bg-primary px-8 py-2 rounded-full text-xs lg:text-sm lg:hover:translate-x-2 duration-300'>View Project</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
