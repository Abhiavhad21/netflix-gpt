// import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from './SecondaryContainer';
// import VideoTitle from './VideoTitle';


const Browse = () => {

  
  useNowPlayingMovies();
  return (
    <div className='overflow-hidden'>
      <Header />
      <MainContainer/>
      <SecondaryContainer />
    </div>
  )
}

export default Browse