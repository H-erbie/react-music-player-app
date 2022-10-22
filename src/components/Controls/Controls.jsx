import React from 'react'
import {FaBackward} from 'react-icons/fa'
import {FaForward} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'
import {FaPlay} from 'react-icons/fa'
import './Controls.css'

const Controls = (props) => {
  return (
    <div className='control'>
        <button className='control__skipbtn' onClick={() => props.skipSong(false)}><FaBackward/></button>
        <button className='control__playbtn' onClick={() => props.setIsPlaying(!props.isPlaying)}>{props.isPlaying ? <FaPause/> : <FaPlay/>}</button>
        <button className='control__skipbtn' onClick={() => props.skipSong()}><FaForward/></button>
    </div>
  )
}

export default Controls