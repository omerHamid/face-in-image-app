import './Sign.css'
import React, { useState } from 'react'

import { Link, Redirect} from 'react-router-dom'
import axios from 'axios';

const initialState={username: '', email: '', password: ''}

function SignUp() {
const [userInput, setUserInput] = useState(initialState)
const [regSuccessMsg, setRegSuccessMsg]= useState('')

const sendSer=(e) => {
  // e.preventDefault()
  if(userInput.username==='' || userInput.email==='' || userInput.password===''){console.log('empty fields!!');}
  else {
    axios.post('https://smart-face-detect-back.herokuapp.com/signup', userInput)
    .then(res => {
      console.log(res.data);
      if(res.data==='success')setRegSuccessMsg('you are successfully registered!')
      }
    )
    .catch(err => console.log("something went wrong with an http method: ", err))  
  }
  // setUserInput(initialState)
}

const userInputFields=(e) => {
  setUserInput({...userInput, [e.target.name]:e.target.value})
}





console.log(userInput);
  return (
    <div className='singWarper'>
        <div className="form shadow-5">
          <div className="title">Welcome</div>
          {regSuccessMsg ? <h3  style={{color: 'green'}}>you are successfully registered!</h3> : <div className="subtitle">Let's create your account!</div>}
              <div className="input-container ic1">
                <input className="input" type="text" required placeholder="first name.." name='username' onChange={userInputFields}/>
                <div className="cut"></div>
              </div>
              <div className="input-container ic2">
                <input className="input" type="email" required placeholder="email.." name='email' onChange={userInputFields}/>
                <div className="cut"></div>
              </div>
              <div className="input-container ic2">
                <input className="input" type="password" required placeholder="password.." name='password' onChange={userInputFields}/>
                <div className="cut cut-short"></div>
              </div>
            <button type="text" className="submit shadow-5" onClick={sendSer}>submit</button>
          <Link to='/log-in'>
            <button className='switchButton '>log in</button>
          </Link>
        </div>
        {regSuccessMsg ? <Redirect to='log-in' />: null}
    </div>
  ) 
}

export default SignUp
