import React from 'react'
import '../CSS/PostSide.css'
import PostShare from './PostShare'
import Post from './post'

const PostSide = () => {
  return (
    <div className='PostSide'>
        <PostShare/>
        <Post/>
    </div>
  )
}

export default PostSide