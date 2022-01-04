import React from 'react'
import ProjectCard from '../utils/ProjectCard'
// components
import SectionHeading from '../utils/SectionHeading'

const Projects = () => {
    return (
        <section id='projects'>
            <SectionHeading 
                title='Projects' 
                description='Problems trying to resolve the conflict between 
                he two major realms of Classical physics: Newtonian mechanics...'
            />
            <div className="container pt-8 lg:pt-16 px-8 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-x-4 md:gap-x-8">
                <ProjectCard imageURL='project-1.png'/>
                <ProjectCard imageURL='project-2.png'/>
                <ProjectCard imageURL='project-3.png'/>
                <ProjectCard imageURL='project-4.png'/>
            </div>
        </section>
    )
}

export default Projects