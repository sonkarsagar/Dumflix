import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearch } from '../utils/gptslice';
import { GPTSearch } from './GPTSearch';
import { changeLanguage } from "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate();
  const gptState = useSelector((state) => state.gpt);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
      } else {
        dispatch(removeUser())
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className='absolute flex justify-between p-4 z-50 w-full bg-gradient-to-b from-black/100 via-black/20 to-transparent'>
      <img className='w-53 p-2' src={LOGO} alt='logo' />
      {user && <div className="flex">
        {gptState.gptToggle && <select className="text-sm my-7 text-white rounded-lg cursor-pointer bg-gray-800" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>}
        <button className='px-3 my-7 mx-2 bg-purple-800 text-white rounded-lg cursor-pointer' onClick={handleGPTSearch}>{!gptState.gptToggle ? "GPT Search" : "Homepage"}</button>
        <button className='cursor-pointer font-bold text-white text-xl underline' onClick={handleSignOut}>{user.displayName || "Profile"}</button>
      </div>}
    </div>
  )
}

export default Header