import React from 'react'
import '../CSS/FollowersCards.css'

import { Followers } from '../Data/FollowersData.js'

const FollowersCards = () => {
  return (
    <div className='FollowersCards'>
      <h3>Who is Following you</h3>
    {Followers.map((follower, id)=>{
      return(
        <div className="follower">
          <div><img src={follower.img} alt="" className='followerImg' />
          <div className="name">
            <span>{follower.name}</span>
            <span> {follower.username}</span>
          </div>
          </div>
          <button className='button fc-button'>Follow</button>
        </div>
      )

    })}
    </div>
  )
}

export default FollowersCards