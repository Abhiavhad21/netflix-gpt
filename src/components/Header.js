import React from 'react'
import { LOGO, SIGN_OUT_ICON } from '../utils/constants'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
  const HandelSignOut = () =>{
    
    signOut(auth)
    .then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  };
  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44'
        src={LOGO} alt='Logo'
        />

      { user &&(<div className='flex'>
          <img 
          className='w-12 h-12 m-4'
          src={SIGN_OUT_ICON}
          alt="Usericon"
          />
          <button onClick={HandelSignOut}>(Sign Out)</button>
        </div> )}
    </div>
  )
}

export default Header