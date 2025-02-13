import React from 'react'

const Services = () => {
    return (
        <div className="pt-16 relative min-h-screen bg-black">
            <div className="relative z-10 max-w-5xl mx-auto py-12">
                <h1 className="text-4xl font-bold mb-4">Services</h1>
                <p className="max-w-xl text-gray-300 mb-8">
                    Explore our range of services, from Software Development to Data Migration.
                </p>
                {/* Services List */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold">Software Development</h2>
                        <p className="text-gray-300">
                            We build robust solutions using React, Angular, Node, etc.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Software Upgrade Services</h2>
                        <p className="text-gray-300">
                            Migrate your legacy systems to modern platforms.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Data Migration Services</h2>
                        <p className="text-gray-300">
                            Ensure seamless data transitions with minimal downtime.
                        </p>
                    </div>
                    {/* Add more services as needed */}
                </div>
            </div>
        </div>
    )
}

export default Services
