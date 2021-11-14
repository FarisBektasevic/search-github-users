import React, { useContext } from 'react'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'
import { GithubContext } from '../context/Context'

const Card = () => {
  const { githubUser } = useContext(GithubContext)
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser
  return (
    <div className="relative py-4 px-4 mx-2 my-6 bg-white w-96 rounded-md rounded-tl-none">
      <div className="absolute left-0 -top-8 text-gray-500 bg-white px-4 py-1 rounded-t-md">
        <p>User</p>
      </div>
      <header className="flex items-center relative">
        <img
          src={avatar_url}
          alt={name}
          className="w-20 h-20 mr-4 rounded-full"
        />
        <div className="flex flex-col justify-center">
          <h4 className="font-semibold">{name}</h4>
          {twitter_username && <p>@{twitter_username}</p>}
        </div>
        <button className="absolute right-6 px-4 py-1 border-2 border-green-500 rounded-full transition-all duration-300 hover:bg-green-500 hover:text-white bg-white ">
          Follow
        </button>
      </header>
      <p className="pl-1 my-2">{bio}</p>
      <div className="mt-6 w-full">
        <p className="flex items-center">
          <MdBusiness className="mr-4" />
          {company}
        </p>
        <p className="flex items-center mt-1">
          <MdLocationOn className="mr-4" /> {location}
        </p>
        <a className="flex items-center" href={`https://${blog}`}>
          <MdLink className="mr-4" /> {blog}
        </a>
      </div>
    </div>
  )
}

export default Card
