import React from 'react'

const SectionHeading = ({title, description}) => {
    return (
        <div className='text-white'>
            <p className='text-3xl font-bold pb-3 sm:text-4xl sm:pb-5'>{title}</p>
            <p className='text-xs px-8 font-light leading-5 sm:text-base sm:leading-7'>{description}</p>
        </div>
    )
}

export default SectionHeading
