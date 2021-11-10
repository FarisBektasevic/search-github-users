import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-blue-200">
      <h1 className="text-9xl font-bold my-3">404</h1>
      <h3 className="font-semibold text-lg mb-3">
        Sorry, The Page You Tried Cannot Be Found
      </h3>
      <button className="bg-blue-500 px-4 py-1 text-white rounded-md hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in mt-1">
        <Link to="/">Back to home</Link>
      </button>
    </div>
  )
}

export default ErrorPage
