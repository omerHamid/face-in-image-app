import Tilt from 'react-parallax-tilt';
import './Logo.css'

function Logo() {
  return (
    <div >
    <Tilt className='logContainer br2  mh3 mv5 dib shadow-2' >
        <h1><img src="https://img.icons8.com/dusk/100/000000/brain.png" alt='this is the logo'/></h1>
    </Tilt>
    </div>
  )
}

export default Logo
