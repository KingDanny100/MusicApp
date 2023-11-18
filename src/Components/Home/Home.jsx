import React, { useContext, useRef } from 'react';
import './Home.css';
import {  Adverts, MyContext} from '../../Data';
import { HomeContext } from '../../HomeContext';


const Home = (props) => {
    const dataa = useContext(MyContext)

//     const { songs, setCurrentSongIndex, setIsPlaying, currentSongIndex, isPlaying } = useContext(HomeContext);
//     const audioRef = useRef(null);  

//     const handleImagePlay = (index) => {

//       setCurrentSongIndex(index);
//    if (index === currentSongIndex) {
//     setIsPlaying(!isPlaying);
//   } else {
//     setIsPlaying(true);
//   }

//   if (isPlaying) {
//     audioRef.current.pause();
//   } else {
//     audioRef.current.play();
//   }
// };
   



  return (
    <div className='boxcontainer'>
      {dataa.map((item, index)=>{
       return ( 
       <div className='box' key={index} onClick={() => props.getHomeIndex(index)} style={{cursor:'pointer'}}>
        {/* <h4>Double click to play</h4> */}
          <img className='boximage' src={item.image} alt={item.name} />
          <h4 className='songtittle'>{item.title}</h4>
          <h5 className='album'>{item.artist}</h5>
        </div>
       );
      })}
    </div>
  )
}


export default Home
