import React from 'react'
import Hero from '../components/Hero'
import ProjectsPreview from '../components/ProjectsPreview'
import ServicesPreview from '../components/ServicesPreview'

const Landing = () => {
    return (
        <div className="pt-16">

            <Hero />
            <ProjectsPreview />
            <ServicesPreview />

        </div>
    )
}

export default Landing