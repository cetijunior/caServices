import React from 'react'

const Contact = () => {
    return (
        <div className="pt-16">
            <section className="bg-gradient-to-b from-black to-gray-900 min-h-[40vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Let's Craft Excellence, Together!</h1>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded">
                    Contact Us
                </button>
            </section>

            {/* Optional Contact Form */}
            <section className="max-w-4xl mx-auto py-12 px-4">
                <form className="space-y-4 bg-gray-800 p-6 rounded">
                    <div>
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 border border-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 bg-gray-700 border border-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Message</label>
                        <textarea
                            rows="4"
                            className="w-full p-2 bg-gray-700 border border-gray-600"
                        />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white">
                        Submit
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Contact
