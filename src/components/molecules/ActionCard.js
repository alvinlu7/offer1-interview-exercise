import React from 'react'
import { Link } from 'react-router-dom'

const ActionCard = ({image, link, buttonText, title, text}) => {
  return (
    <div className="flex flex-col items-center justify-between shadow-lg p-8 w-1/4 bg-white">
      <img src={image} className="w-64" alt="title"/>
      <p className="mx-auto mb-6 font-serif text-xl font-medium">
        {title}
      </p>
      <p className="mx-auto mb-6 font-sans text-base font-light text-center">
        {text}
      </p>
      <Link className="mx-auto" to={link}>
        <button className="border-2 px-4 py-2 rounded-md text-yellow-500 font-light hover:opacity-90 focus:outline-none">
          {buttonText}
        </button>
      </Link>
    </div>
  )
}

export default ActionCard