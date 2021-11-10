import React from 'react'
import Info from './Info'
import Navbar from './Navbar'
import Repos from './Repos'
import Search from './Search'
import User from './User'

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </div>
  )
}

export default Dashboard
