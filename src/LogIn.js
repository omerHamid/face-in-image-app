import React, { useState} from 'react'
import './Sign.css'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

const initialState={username: '', password: ''}

const hiddenLogErrCss=
  {
    color:"tomato",
    fontSize: 'small',
    fontWeight: '400'
  }
  
  
function LogIn({userAllowed, setUserAllowed}) {
  const [userInput, setUserInput] = useState(initialState)
  const [loginErrMsg, setLoginErrMsg] = useState(false)
  
  // console.log(userInput);

  const sendSer= (e) => {
    axios.post('https://smart-face-detect-back.herokuapp.com/login', userInput)
    .then(res => {
      // console.log(res.data);
      if(res.data !== 'wrong credentials!') {setLoginErrMsg(false); setUserAllowed(res.data)}
      else {setLoginErrMsg(true); setUserAllowed(false)}
      // setUserInput(initialState)x
    })
    .catch(err => console.log("something went wrong with an http method: ", err))
  }
    
  const userInfoInput=(e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value})
  }

  if(userAllowed) {return <Redirect to='/main' />}
  else 
  return (
    <div className='singWarper'>
      <div className="form shadow-5 " style={{height: '420px'}}>
        <div className="title">Welcome</div>
            {loginErrMsg ? <h2 style={hiddenLogErrCss}>wrong username or password !</h2> : null}
            <div className="input-container ic1">
              <input className="input" type="text" name='username' required placeholder="name.." onChange={userInfoInput}/>
              <div className="cut"></div>
            </div>
            <div className="input-container ic2">
              <input className="input" type="password" name='password' required placeholder="password.." onChange={userInfoInput}/>
              <div className="cut cut-short"></div>
            </div>
            <button className="submit shadow-5" type="text" onClick={sendSer}>submit</button>
        <Link to='/'>
          <button
            className='switchButton '>sign up
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LogIn
