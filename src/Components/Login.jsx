import React from 'react'
import loginImg from '../Images/login-img.svg'

const Login = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <img className="h-48" src={loginImg} alt="" />
      <h2 className="text-3xl font-medium my-3">Github User</h2>
      <button className="bg-blue-500 px-4 py-1 text-white rounded-md hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in mt-1">
        Login
      </button>
    </div>
  )
}

export default Login
