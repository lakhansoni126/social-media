import React from 'react'
import "../CSS/PostShare.css"
import ProfileImg from '../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"


const PostShare = () => {
    return (
        <div className='PostShare'>
            <img src={ProfileImg} alt="" />
            <div>
                <input type="text" placeholder="What's happening " />
            <div className="postOption">
                <div className="option">
                    <UilScenery />
                    photo
                </div>
                <div className="option">
                    <UilPlayCircle />
                    Video
                </div>
                <div className="option">
                    <UilLocationPoint />
                    Location
                </div>
                <div className="option">
                    <UilSchedule />
                    Schedule
                </div>
            </div>
            </div>
        </div>
    )
}

export default PostShare