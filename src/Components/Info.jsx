import React, { useContext } from 'react'
import { GithubContext } from './Context'

const Info = () => {
  const data = useContext(GithubContext)

  return <div>{data}</div>
}

export default Info
