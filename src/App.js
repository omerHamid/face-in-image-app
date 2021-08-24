import React, { useState } from 'react'
import ProtectedRoutes from './ProtectedRoutes';
import Main from './Main';
import LogIn from './LogIn';
import SignUp from './SignUp ';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Particles from 'react-particles-js';



function App() {

  const particlesOptions={
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#FFFFFF",
          blur: 1, 
          
        }
      }
    }
  }

  const [userAllowed, setUserAllowed] = useState("")

  // console.log('form app.js, is user allowed? ', userAllowed);
  console.log('test');
  
  return (
    <Router basename="/face-in-image">
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}/>
        
        <Switch>
          <ProtectedRoutes exact path='/main' Main={Main} userAllowed={userAllowed} setUserAllowed={setUserAllowed}/>

          <Route exact path='/log-in'  render={props=>    <LogIn {...props} setUserAllowed={setUserAllowed} userAllowed={userAllowed}/>} 
          />

          <Route exact path='/'>
             <SignUp />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
