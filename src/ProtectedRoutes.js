import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function protectedRoutes({Main, userAllowed,setUserAllowed, ...rest}) {
   // console.log('is user allowed', userAllowed);
  return (
  <Route {...rest} 
  render={props => userAllowed ?
     <Main {...rest}  userAllowed={userAllowed} setUserAllowed={setUserAllowed} />  :
      <Redirect to={'/log-in'} /> 
  }
  />
  //   <Navigation />
  //   <Logo />
  //   <Rank />
  //   <ImageSearch />
  // </Route>
 )
}

export default protectedRoutes
