import React from 'react';
import PricingCard from '../utils/PricingCard'
// components
import SectionHeading from '../utils/SectionHeading'


const Pricing = () => {


    return (
        <section id='pricing'>
            <SectionHeading
                title='Pricing' 
                description='Problems trying to resolve the conflict between 
                he two major realms of Classical physics: Newtonian mechanics...'
            />
            <div className="container pt-[50px] grid md:grid-cols-3 gap-y-10">
                <PricingCard price={'0'} title={'FREE'} badge={false}/>
                <PricingCard price={'19'} title={'SILVER'} badge={true}/>
                <PricingCard price={'49'} title={'GOLD'} badge={false}/>
            </div>
        </section>
    )
}

export default Pricing
