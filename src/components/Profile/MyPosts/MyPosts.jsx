import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
      <div>
        my posts
          <div>
          New post
          </div>
        <div className={prof.posts}>
        <Post message="where is my mind?" likesCount="11"/>
        <Post message="wheeeeere is my mind?" likesCount="22"/>

        </div>
      </div>
  )
};

export default MyPosts;