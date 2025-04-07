import React from 'react'
import {FaPlay} from "react-icons/fa"
import { AiOutlineInfoCircle } from 'react-icons/ai';


const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen h-screen aspect-video absolute text-white pt-[17%] px-20 bg-gradient-to-r from-black'>
      
      <h1 className='text-5xl font-bold' >{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div className='p-4 flex gap-2'>
      <button className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded hover:bg-gray-200 transition hover:bg-opacity-85  ">
        <FaPlay className="text-lg" />
          Play
      </button>

        <button className='flex items-center gap-2 px-5 py-2 bg-gray-500 text-white rounded hover:bg-gray-200 transition hover:bg-opacity-85 hover:text-black '>
          <AiOutlineInfoCircle className="text-lg"/>
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle