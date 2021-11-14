import React, { useContext } from 'react'

// icons
import { GoRepo, GoGist } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
import { GithubContext } from '../context/Context'

const Info = () => {
  const { githubUser } = useContext(GithubContext)
  const { public_repos, followers, following, public_gists } = githubUser

  const items = [
    {
      id: 1,
      icon: <GoRepo />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ]
  return (
    <div className="flex justify-center w-full">
      {items.map((item) => {
        return <Item key={item.id} {...item} />
      })}
    </div>
  )
}

const Item = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center justify-center h-16 w-48 px-4 mx-12 my-6 bg-white rounded-md">
      <div
        className={`w-10 h-10 mr-6 rounded-full flex flex-col justify-center items-center text-2xl text-${color}-400 bg-${color}-200`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold">{value}</h3>
        <p className="text-gray-400">{label}</p>
      </div>
    </div>
  )
}

export default Info
