import React from 'react'

const Header = () => {
    return (
        <header className='background'>
            <div className="container text-white py-[50px] xl:py-[150px] xl:pb-[100px] text-center xl:text-left">
                <p className='font-bold px-6 xl:px-0 text-4xl xl:text-6xl leading-[60px] xl:leading-[70px] xl:w-[600px]'>We Ensure A Best Insurance Service</p>
                <p className='mx-auto xl:text-xl xl:mx-0 my-[30px] w-[70%] xl:w-[450px] leading-[30px] xl:leading-[35px] xl:font-light'>We know how large objects will act, but things on a small scale just do not act that way.</p>
                <div className="xl:inline-flex">
                    <button className="btn-primary xl:mr-3 xl:text-sm">Get Quote Now</button>
                    <button className="btn-secondary xl:text-sm">Learn More</button>
                </div>
            </div>
        </header>
    )
}

export default Header
