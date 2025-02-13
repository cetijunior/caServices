import React from 'react'

const Projects = () => {
    return (
        <div className="pt-16 px-4">
            <section className="bg-gradient-to-r from-black to-gray-900 py-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Projects</h1>
                <p className="text-gray-300">Showcasing our latest work.</p>
            </section>

            <section className="max-w-5xl mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Example project cards */}
                <div className="bg-gray-800 p-4">
                    <img
                        src="https://via.placeholder.com/300x200"
                        alt="Project 1"
                        className="mb-2"
                    />
                    <h2 className="text-xl font-semibold">Project 1</h2>
                    <p className="text-gray-300">Description of project 1.</p>
                </div>
                <div className="bg-gray-800 p-4">
                    <img
                        src="https://via.placeholder.com/300x200"
                        alt="Project 2"
                        className="mb-2"
                    />
                    <h2 className="text-xl font-semibold">Project 2</h2>
                    <p className="text-gray-300">Description of project 2.</p>
                </div>
                {/* Add more as needed */}
            </section>
        </div>
    )
}

export default Projects
