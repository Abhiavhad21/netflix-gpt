import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  
  
  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-6 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        
        <div className='flex  '>
          {movies?.map(movies => 
            <MovieCard key={movies.id} posterPath = {movies.poster_path}/>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default MovieList