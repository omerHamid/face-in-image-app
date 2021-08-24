import React from 'react'

function Rank({userAllowed}) {
  // console.log(userAllowed);

  const rankStyles={
    display: 'inline-block', fontSize: 'large', marginBottom: '10px', paddingRight: '2px' 
  }

  return (
    <div>
      <div style={rankStyles} className='white f3'>
        {`${userAllowed.username} - `}  
      </div>
      <div style={rankStyles}className='white f2'>
      { `number of submissions #${userAllowed.entries}`}  
      </div>
    </div>
  )
}

export default Rank
