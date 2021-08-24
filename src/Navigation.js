import { Redirect } from 'react-router-dom'



const Navigation = ({userAllowed,setUserAllowed}) => {

  if(userAllowed)  
  return (
    <div>
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f4 link dim back underline pa3 pointer' onClick={() => setUserAllowed(false)}>sign-out</p>
      </nav>
    </div>
  )
  else return <Redirect to='/' />
}


export default Navigation