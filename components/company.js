"use client"

import { useState } from 'react'

const Company = () => {
    const [isOpen, setIsOpen] = useState(false)
    const altText = isOpen ? 'Open menu' : 'Close menu'


    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-500 hover:text-black"
            >
                Company

                <img
                    src={`/images/icon-arrow-${isOpen ? 'up' : 'down'}.svg`}
                    alt={altText}
                    className="w-5 ml-1"
                />
            </button>
            {isOpen && (
                <div className="flex flex-col mobile:absolute items-start right-0 mt-2 w-max bg-white border border-gray-200 rounded-md shadow-lg">
                    <a
                        href="#"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        History
                    </a>
                    <a
                        href="#"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Our Team
                    </a>
                    <a
                        href="#"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Blog
                    </a>
                </div>
            )}
        </div>
    )
}

export default Company
