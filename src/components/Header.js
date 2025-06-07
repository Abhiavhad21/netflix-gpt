import { useEffect } from 'react'
import { LOGO, SIGN_OUT_ICON, SUPPORTED_LANGUAGESC } from '../utils/constants'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { Search } from 'lucide-react';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const HandelSignOut = () =>{
    
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error")
    });
  };

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(
            addUser({
              uid:uid, 
              email: email, 
              displayName:displayName
            }));
            navigate("/browse");
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/")
        }
      });
      return () =>unsubscribe();
    }, []);

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44'
        src={LOGO} alt='Logo'
        />

      { user && (
        <div className='flex p-2'>
        { showGptSearch && ( 
          <select className='p-2 m-4 bg-gray-500 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGESC.map((lang) =>(
              <option key={lang.identifer} value={lang.identifer}>{lang.name}</option>
            ))}
            
          </select>
        )}

          <button className="flex items-center gap-2 px-4 py-2 mx-2 my-4 bg-blue-600 text-white hover:bg-blue-700 rounded-xl" onClick={handleGptSearchClick}>
             {showGptSearch ? (
                "HomePage"
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  GPT Search
                </>
              )}

          </button>
        
          <img 
          className='w-12 h-12 m-4 rounded-lg'
          src={SIGN_OUT_ICON}
          alt="Usericon"
          />
          <button className='text-white' onClick={HandelSignOut}>(Sign Out)</button>
        </div> )}
    </div>
  )
}

export default Header