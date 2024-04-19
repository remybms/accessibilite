"use client"

import { useState } from 'react'

const Features = () => {
  const [isOpen, setIsOpen] = useState(false)
  const altText = isOpen ? 'Open menu' : 'Close menu'


  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900"
      >
        Features

        <img
          src={`/images/icon-arrow-${isOpen ? 'up' : 'down'}.svg`}
          alt={altText}
          className="w-4 h-4 ml-1"
        />
      </button>
      {isOpen && (
        <div className="mobile:absolute flex flex-col right-0 mt-2 w-fit bg-white border border-gray-200 rounded-md shadow-lg">
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <img src='/images/icon-todo.svg' className='mr-2' alt="Todo's icon"/>
            Todo List
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <img src='/images/icon-calendar.svg' className='mr-2' alt="calendar's icon"/>

            Calendar
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <img src='/images/icon-reminders.svg' className='mr-2' alt="reminders' icon" />

            Reminders
          </a>
          <a
            href="#"
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <img src='/images/icon-planning.svg' className='mr-2' alt="planning's icon" />

            Planning
          </a>
        </div>
      )}
    </div>
  )
}

export default Features
