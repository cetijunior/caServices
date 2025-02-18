import React from 'react'
import Hero from '../components/Landing/Hero'
import ProjectsPreview from '../components/Landing/ProjectsPreview'
import ServicesPreview from '../components/Landing/ServicesPreview'
import Projects from './Projects'

const Landing = () => {
    return (
        <div className="">

            <Hero />
            <Projects />
            {/* <ProjectsPreview /> */}
            <ServicesPreview />

        </div>
    )
}

export default Landing