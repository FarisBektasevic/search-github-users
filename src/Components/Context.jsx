import React, { useState, useEffect } from 'react'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()
//Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={'hello'}>{children}</GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }
