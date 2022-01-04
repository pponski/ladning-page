import React from 'react'
import {RiStarSFill} from 'react-icons/ri'

const ClientCard = ({image, name, job, opinion}) => {
    return (
        <div className='bg-white mt-10 p-6 py-10 text-left md:mx-4 xl:mx-4 xl:py-10 xl:mt-10 shadow-md xl:hover:shadow-xl duration-300 xl:hover:translate-y-2 cursor-default'>
            <div className='flex items-center mb-1'>
                <img src={image} alt="" className='h-20 rounded-full xl:h-[100px]' />
                <div className="pl-5">
                    <p className='text-xl font-black'>{name}</p>
                    <p className='text-graytext font-light text-xs mb-2 xl:text-sm'>{job}</p>
                    <div className='flex text-yellow-400 xl:text-xl'>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                        <RiStarSFill/>
                    </div>
                </div>
            </div>
            <p className='pt-3 text-graytext text-sm font-light text-justify xl:text-base xl:leading-8'>{opinion}</p>
        </div>
    )
}

export default ClientCard
