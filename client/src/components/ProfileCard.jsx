import React from 'react'
import '../CSS/ProfileCard.css'
import Cover from '../img/cover.jpg'
import Profile from '../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt='' />
      </div>

      <div className="ProfileName">
        <span>Tom Holland</span>
        <span>Spiderman</span>
      </div>

      <div className="FollowStatus">
        <hr />
            <div>
                <div className="follow">
                  <span>2M</span>
                  <span>Following</span>
                </div>

              <div className="vl"></div>

                <div className="follow">
                  <span>102</span>
                  <span>Followers</span>
                </div>


            </div>
        <hr />
      </div>
      <span className='Mp'>My Profile</span>

    </div>
  )
}

export default ProfileCard