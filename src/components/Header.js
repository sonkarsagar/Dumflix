import React, { use } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';

const Header = () => {
  const navigate=useNavigate();
  // const user=useSelector(state=>state.user);
  // console.log(user);
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute flex justify-between p-4 z-50 w-full'>
      <img className='w-53 p-2' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      <div className="flex">
        <button className='font-bold text-white text-xl underline' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header