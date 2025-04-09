// import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(Store=> Store.gpt.showGptSearch);
  useNowPlayingMovies();
  useTopRatedMovies();
  useTrendingMovies();

  return (
    <div className='overflow-hidden'>
      <Header />
      {
        showGptSearch ?
        ( 
          <GptSearch />
        ) : (
          <>
            <MainContainer/>
            <SecondaryContainer />
          </>
        )

      }
     
      
    </div>
  )
}

export default Browse