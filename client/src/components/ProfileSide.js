import React from 'react'
import '../CSS/ProfileSide.css';
import FollowersCards from './FollowersCards';
import LogoSearch from './LogoSearch';
import ProfileCard from './ProfileCard';

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCards/>
    </div>
  )
}

export default ProfileSide