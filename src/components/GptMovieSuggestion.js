import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"
const GptMovieSuggestion = () => {
  
  const {movieResults, movieNames} = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-slate-400 text-white rounded-xl bg-opacity-55'>
       <div>
        {movieNames.map((movieNames, index) => (
          <MovieList 
             key={movieNames}
             title={movieNames}
             movies={movieResults[index]}
          />
        ))}
       </div>
    </div>

  )
}

export default GptMovieSuggestion