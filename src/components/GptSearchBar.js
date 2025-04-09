import { Search } from "lucide-react";
import React from 'react'
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langkey = useSelector((store) => store.config.lang);

  
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input 
            type='text'
            className='p-4 m-4 bg-white col-span-10 border border-blue-600 rounded-lg'
            placeholder= {lang[langkey].gptSearchPlaceholder}
            />
       

            <button className="flex items-center gap-1 px-4 py-2 mx-2 my-4 bg-red-500 text-white hover:bg-red-700 rounded-xl col-span-2 ">
                <Search className="w-5 h-5" />
                {lang[langkey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;