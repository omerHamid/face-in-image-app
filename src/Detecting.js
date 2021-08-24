

function Detecting({imageUrlInput, box_s}) {


const boxStylingFunc=face => {
 return {
    position: 'absolute',
    boxShadow: '0 0 0 3px #149df2 inset',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    cursor: 'pointer',
    top: face.topRow,
    bottom: face.bottomRow,
    left: face.leftCol,
    right: face.rightCol 
}
}


  const faces=box_s.map((box, index) => <div key={index} style={boxStylingFunc(box)}></div>)
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img  id='detectImage' src={imageUrlInput} alt="" width='400px' height='auto'/>
        {faces}
      </div>
    </div>
  )
}

export default Detecting
