import {useState} from 'react'
import Detecting from './Detecting';
import clarifai from 'clarifai';
import axios from 'axios'
import './ImageSearch.css'


const app = new clarifai.App({
  apiKey: 'c3c9f7cbc7814285854d6907d0444c47'
 });

 const initialState=''
 
function ImageSearch({userAllowed, setUserAllowed}) {

  const [box, setBox] = useState([])
  const [imageUrlInput, setImageUrlInput] = useState(initialState)

  const calculateBoxAround=(data) =>{
    const image=document.getElementById('detectImage')
    const width=Number(image.width);
    const height=Number(image.height);
    setBox(data.map(face => 
    {return{
      leftCol: face.left_col*width,
      topRow: face.top_row*height,
      rightCol: width-(face.right_col*width),
      bottomRow: height-(face.bottom_row*height)
    }}))

  }

  const apiStuff=() => {
    app.models.predict('f76196b43bbd45c99b4f3cd8e8b40a8a',imageUrlInput)
    .then(res => 
    {setUserAllowed({...userAllowed, entries: userAllowed.entries+1});
    console.log(userAllowed)
    calculateBoxAround(res.outputs[0].data.regions.map(region => region.region_info.bounding_box))})
    .catch(err => {console.log(err);});
    serCon()
    // if(box.length>0){setUserAllowed({...userAllowed, entries: userAllowed.entries+1})}
  }

  const serCon=() => {
    axios.post('http://localhost:3000/profile', userAllowed).then(res => {
      console.log(res.data);
    }
    )
  }

  return (
    <div >
      <div  className='center'>
        <div className='searchWrapper center pa4 br3 shadow-5'>
          <input 
          className="pa2 shadow-1 f4 w-70 center" 
          type="text" placeholder={'paste an image...'} 
          onChange={e => {setImageUrlInput(e.target.value);setBox([])}}
          
          />
          <button className='w-30 f4 link grow ph3 pv2 dib dark pointer shadow-3'
          onClick={apiStuff}>
            search
          </button>
        </div>
      </div>
      <Detecting  box_s={box} setBox={setBox}  imageUrlInput={imageUrlInput}/>
    </div>
  )
}

export default ImageSearch
