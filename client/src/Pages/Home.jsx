import React from 'react'
import PostSide from '../components/PostSide';
import ProfileSide from '../components/ProfileSide';
import '../CSS/Home.css';
import RightSide from '../components/RightSide';

const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
        </div>
  )
}

export default Home;