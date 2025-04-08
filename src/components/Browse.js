// import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
// import VideoTitle from './VideoTitle';


const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useTrendingMovies();

  return (
    <div className='overflow-hidden'>
      <Header />
      <MainContainer/>
      <SecondaryContainer />
    </div>
  )
}

export default Browse