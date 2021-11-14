import React from 'react'
import Info from './Info'
import Navbar from './Navbar'
import Repos from './Repos'
import Search from './Search'
import User from './User'
import Card from './Card'
import Followers from './Followers'
const Dashboard = () => {
  return (
    <div className="px-10">
      <Navbar></Navbar>
      <Search />
      <Info />
      <Card />
      <Followers />
      <User />
      <Repos />
    </div>
  )
}

export default Dashboard
