import React from 'react'
import Logo from '../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import '../CSS/LogoSearch.css';
const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt=''/>
         <div className="Search">
            <input type="text" placeholder='#Explore' />
            <div className="sIcon">
                <UilSearch/>
            </div>    
        </div>         
    
    </div>
  )
}

export default LogoSearch