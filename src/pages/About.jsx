import React from 'react'

const About = () => {
    return (
        <div className="pt-16 px-4">
            <section className="min-h-[40vh] flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-800">
                <h1 className="text-4xl font-bold mb-2">Why Nebula Software Solutions?</h1>
                <p className="max-w-2xl text-center text-gray-300">
                    We craft radical solutions. Founded in 2020...
                </p>
            </section>

            {/* Mission, Vision, Corporate Responsibility */}
            <section className="max-w-5xl mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Mission</h2>
                        <p className="text-gray-300">
                            Our mission is to seamlessly integrate cutting-edge technologies...
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Vision</h2>
                        <p className="text-gray-300">
                            We envision our clients’ business products evolving and scaling globally...
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Corporate Responsibility</h2>
                        <p className="text-gray-300">
                            Ensuring not only steady revenue but also the enhancement of social and quality causes...
                        </p>
                    </div>
                </div>
            </section>

            {/* Meet Our Team (placeholder) */}
            <section className="bg-black py-8">
                <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Replace with actual team data */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
                        <div key={member} className="bg-gray-800 p-4 text-center">
                            <div className="h-40 bg-gray-700 mb-2"></div>
                            <p>John Doe</p>
                            <p className="text-sm text-gray-400">CEO</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About
