import React from 'react'
import FollowersCards from './FollowersCards'
import InfoCard from './InfoCard'
import LogoSearch from './LogoSearch'
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       <LogoSearch/>
       <InfoCard/>
       <FollowersCards/>
   </div>
  )
}

export default ProfileLeft
