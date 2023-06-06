import React from 'react';
import "../css/ProfileScreen.css";
import Navbar from "./Navbar"
import { useSelector } from 'react-redux';
import { selectUser } from "../redux/slice/userSlice"
import Avatar from "../image/Avatar.png"
import { auth } from '../config/firebase';

const ProfileScreen = () => {
  const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
      <Navbar />
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src={Avatar} alt="avatar" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
            <h3>Plans</h3>
              <button className='profileScreen_signOut' onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;