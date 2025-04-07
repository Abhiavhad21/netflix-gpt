import { useEffect } from 'react'
import { LOGO, SIGN_OUT_ICON } from '../utils/constants'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
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
    },[]);
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
          <button className='text-white' onClick={HandelSignOut}>(Sign Out)</button>
        </div> )}
    </div>
  )
}

export default Header