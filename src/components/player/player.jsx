import React, {useEffect, useRef, useState} from 'react'
import Controls from '../Controls/Controls'
import Details from '../Details/Details'
import './player.css'

const Player = (props) => {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        if(isPlaying){
            audioEl.current.play()
        }
        else{
            audioEl.current.pause()
        }
    })
    const skipSong = (forwards  =true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            })
            }
            else {
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex
                    temp--
                    if (temp < 0) {
                        temp = props.songs.length - 1;
                    }
                    return temp;
                })
            
        }
    }
  return (
    <div className="player active">
        <h4>Now Playing</h4>
        <Details
        song = {props.songs[props.currentSongIndex]}
        />
        <Controls
        isPlaying = {isPlaying} 
        setIsPlaying = {setIsPlaying}
        skipSong = {skipSong}
        />
        <audio
         src={props.songs[props.currentSongIndex].src} 
         ref={audioEl} controls
        className='player__audio' download></audio>

        <p>Next In Line: <span>
         {props.songs[props.nextSongIndex].title} by{" "}
         {props.songs[props.nextSongIndex].artist}  
            </span></p>
    </div>
    
    
  )
}

export default Player