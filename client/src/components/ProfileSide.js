import React from 'react'
import '../CSS/ProfileSide.css';
import LogoSearch from './LogoSearch';
import ProfileCard from './ProfileCard';

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard/>
    </div>
  )
}

export default ProfileSide