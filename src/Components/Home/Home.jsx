import React, { useContext, useRef } from 'react';
import './Home.css';
// import {  Adverts, MyContext} from '../../Data';
import { HomeContext } from '../../HomeContext';


const Home = (props) => {
    // const data = useContext(MyContext)

    const { songs, setCurrentSongIndex, setIsPlaying, currentSongIndex, isPlaying } = useContext(HomeContext);
    const audioRef = useRef(null);  

    const handleImagePlay = (index) => {

      setCurrentSongIndex(index);
   // If the clicked song is the currently playing song, toggle play/pause
   if (index === currentSongIndex) {
    setIsPlaying(!isPlaying);
  } else {
    setIsPlaying(true);
  }

  // Toggle play/pause for the audio element
  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
};


  return (
    <div className='boxcontainer'>
      {songs.map((item, index)=>{
       return ( 
       <div className='box' key={index} onClick={() => handleImagePlay(index)}>
        <h4>Double click to play</h4>
          <img className='boximage' src={item.image} alt={item.name} />
          <h4 className='songtittle'>{item.title}</h4>
          <h5 className='album'>{item.Album}</h5>
        </div>
       );
      })}
       <audio ref={audioRef} src={songs[currentSongIndex].song} />
    </div>
  )
}


export default Home
