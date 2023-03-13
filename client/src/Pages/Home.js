import React from 'react'
import PostSide from '../components/PostSide';
import ProfileSide from '../components/ProfileSide';
import '../CSS/Home.css';

const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <PostSide/>
        <div className="rightSide"> Right Side</div>
    </div>
  )
}

export default Home;