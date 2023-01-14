import React from 'react'
import ProfileSide from '../components/ProfileSide';
import '../CSS/Home.css';

const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <div className="poetSide">Post</div>
        <div className="rightSide"> Right Side</div>
    </div>
  )
}

export default Home