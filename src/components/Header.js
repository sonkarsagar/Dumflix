import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
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
        <button className='cursor-pointer font-bold text-white text-xl underline' onClick={handleSignOut}>{user.displayName || "Profile"}</button>
      </div>}
    </div>
  )
}

export default Header