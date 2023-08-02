import React from 'react'
import '../CSS/PostSide.css'
import PostShare from './PostShare'
import Posts from './Posts'

const PostSide = () => {
  return (
    <div className='PostSide'>
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide