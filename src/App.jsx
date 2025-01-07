import React from 'react'
import UserProfiles from './components/UserProfiles'
import Loader from "./components/Loader"

const App = () => {
  return (
    <div className='body'>
      <Loader/>
      <UserProfiles/>
    </div>
  )
}

export default App
