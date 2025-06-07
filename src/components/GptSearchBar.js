import { Search } from "lucide-react";
import React, { useRef } from 'react'
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import geminiModel from "../utils/giminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {

    const langkey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    
    
    const searchTMDB = async(movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json()
        return json?.results;
        
    }

    const handleGptSearchClick = async () => {

        const query = "Act as a movie recommendations system and suggest some movies for the query " + searchText.current.value + " only give me names of 5 movies, comma seperted like example result: tron, gadar, sholay, don, golmal";

        const result = await geminiModel.generateContent(query);
        const gptResult = result.response.text();


        if (!gptResult) {
            //
        }
        const movieList = gptResult.split(",");


        const promiseArray = movieList.map(movie => searchTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray)

        console.log(tmdbResults);
        dispatch(addGptMovieResults({ movieNames: movieList, movieResults: tmdbResults }));
    }
  
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=> e.preventDefault()}>
                <input 
                ref={searchText}
                type='text'
                className='p-4 m-4 bg-white col-span-10 border border-blue-600 rounded-lg'
                placeholder= {lang[langkey].gptSearchPlaceholder}
                />
        

                <button className="flex items-center gap-1 px-4 py-2 mx-2 my-4 bg-red-500 text-white hover:bg-red-700 rounded-xl col-span-2 " onClick= {handleGptSearchClick}>
                    <Search className="w-5 h-5" />
                    {lang[langkey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;