import { useState, useEffect } from 'react';
import Player from './components/player/player';  


function App() {
  const [songs] = useState ([
    {
      title: "Starlight",
      artist: "Westlife",
      img_src: "./images/westlife.jpg",
      src: "./songs/starlight.mp3",
    },
    {
      title: "Ghost Town",
      artist: "Benson Boone",
      img_src: "./images/boone.jpg",
      src: "./songs/Ghost.m4a",
    }, 
    {
      title: "Ehunabobrim",
      artist: "Alabaster Box",
      img_src: "./images/alabaster_box.jpg",
      src: "./songs/Ehunabobirim.mp3",
    },
  
    {
      title: "In Christ Alone",
      artist: "Anthem Lights",
      img_src: "./images/anthem lights.webp",
      src: "./songs/in Christ alone.mp3",
    },
    
     {
      title: "All I Want",
      artist: "Kodaline",
      img_src: "./images/kodaline.jpg",
      src: "./songs/all I want.mp3",
    },
   
    {
      title: "Wade In The Water",
      artist: "The Spirituals",
      img_src: "./images/spirituals.jpg",
      src: "./songs/wade_in_the_water.mp3",
    } 
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(0)
   
  useEffect(() => {
    setNextSongIndex (() => {
      if(currentSongIndex + 1 > songs.length -1){
        return 0
      }
      else{
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex, songs.length])
  
  return (

    <div className="App">
      <Player
       currentSongIndex = {currentSongIndex}
       setCurrentSongIndex = {setCurrentSongIndex}
       nextSongIndex = {nextSongIndex}
       songs = {songs}
      />
    </div>
  );
}

export default App;
