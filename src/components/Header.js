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
import { changeLanguage } from "../utils/configSlice"
import { addGPTMovies } from '../utils/gptslice'
import { AVATAR } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const gptState = useSelector((state) => state.gpt);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => { }).catch((error) => { });
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  const handleGPTSearch = () => {
    dispatch(addGPTMovies({ gptMovies: null, tmdbResults: null }))
    dispatch(toggleGPTSearch());
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        while (!auth.currentUser.displayName) {
          await user.reload();
        }
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className={`absolute flex justify-between p-4 z-50 w-full bg-gradient-to-b from-black/100 via-black/20 to-transparent ${user ? "pt-0" : ""}`}>
      <img className={`w-53 ${user ? "p-2" : "p-1"}`} src={LOGO} alt='logo' />
      {user && <div className="flex">
        {gptState.gptToggle && <select className="text-sm my-7 mr-1.5 text-white rounded-lg cursor-pointer bg-gray-800" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>}
        <button className='px-1.5 my-6.5 mr-1.5 bg-purple-800 text-white rounded-lg cursor-pointer' onClick={handleGPTSearch}>{!gptState.gptToggle ? "GPT Search" : "Homepage"}</button>
        <img
          className="my-7 mr-1 w-10 h-10 rounded-sm object-cover"
          alt='usericon'
          src={AVATAR} />
        <button className='cursor-pointer font-bold text-white text-sm underline' onClick={handleSignOut}>{user.displayName.split(" ")[0] || "Profile"}</button>
      </div>}
    </div>
  )
}

export default Header