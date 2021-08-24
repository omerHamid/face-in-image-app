import React from 'react'
import Navigation from './Navigation';
import Logo from './Logo';
import Rank from './Rank';
import ImageSearch from './ImageSearch';
function Main({userAllowed, setUserAllowed}) {
  return (
    <div>
      <Navigation userAllowed={userAllowed} setUserAllowed={setUserAllowed}/>
      <Logo />
      <Rank userAllowed={userAllowed} />
      <ImageSearch userAllowed={userAllowed} setUserAllowed={setUserAllowed}/>
    </div>
  )
}

export default Main
