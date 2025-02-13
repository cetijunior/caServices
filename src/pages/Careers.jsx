import React from 'react'
import careersData from '../data/careersData'

const Careers = () => {
    return (
        <div className="pt-16 px-4 min-h-screen">
            <section className="bg-gradient-to-r from-black to-gray-900 py-12 text-center">
                <h1 className="text-4xl font-bold mb-2">Open Positions</h1>
                <p className="text-gray-300">
                    Join our team and help us make a difference!
                </p>
            </section>

            <div className="max-w-4xl mx-auto py-8">
                {careersData.map((job, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-4 mb-4 flex items-center justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-semibold">{job.title}</h2>
                            <p className="text-gray-400">{job.location}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400">Type: {job.type}</p>
                            {job.applyBy && (
                                <p className="text-gray-400">Apply By: {job.applyBy}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Careers
